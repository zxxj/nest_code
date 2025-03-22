import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @UseInterceptors(
    FilesInterceptor('files', 20, {
      dest: 'uploads',
    }),
  )
  upload(@UploadedFiles() files: Array<Express.Multer.File>, @Body() body) {
    console.log('files:', files);
    console.log('body:', body);

    const fileName = body.name.match(/(.+)\-\d+$/)[1]; // 通过正则匹配文件名称
    const chunkDir = 'uploads/chunks_' + fileName; // 生成文件夹名称,用于创建文件夹

    // 在 uploads 下创建 chunks_文件名 的目录，把文件复制过去，然后删掉原始文件。
    // 创建文件夹
    if (!fs.existsSync(chunkDir)) {
      fs.mkdirSync(chunkDir);
    }
    fs.cpSync(files[0].path, chunkDir + '/' + body.name);
    fs.rmSync(files[0].path);
  }

  // 合并
  @Get('merge')
  merge(@Query('name') name: string) {
    // 接收文件名，然后查找对应的 chunks 目录，把下面的文件读取出来，按照不同的 start 位置写入到同一个文件里
    const chunkDir = 'uploads/chunks_' + name; // 匹配文件夹名称

    const files = fs.readdirSync(chunkDir); // 根据传入的文件夹名称获取文件夹下的所有文件

    let count = 0;
    let startPos = 0;
    files.map((file) => {
      const filePath = chunkDir + '/' + file;
      const stream = fs.createReadStream(filePath);
      stream
        .pipe(
          fs.createWriteStream('uploads/' + name, {
            start: startPos,
          }),
        )
        // 合并完成后删除chunks目录
        .on('finish', () => {
          count++;

          if (count === files.length) {
            fs.rm(
              chunkDir,
              {
                recursive: true,
              },
              () => {},
            );
          }
        });

      startPos += fs.statSync(filePath).size;
    });
  }
}
