import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('api/person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get('find')
  query(@Query('username') username: string, @Query('age') age: number) {
    return `received username: ${username}, age: ${age}`;
  }

  @Get(':id')
  urlParam(@Param('id') id: string) {
    return `received id:${id}`;
  }

  @Post()
  body(@Body() createPersonDto: CreatePersonDto) {
    return `received body: ${JSON.stringify(createPersonDto)}`;
  }

  @Post('file')
  @UseInterceptors(
    AnyFilesInterceptor({
      dest: 'uploads/',
    }),
  )
  body2(
    @Body() createPersonDto: CreatePersonDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    console.log('files', files);
    return `received: ${JSON.stringify(createPersonDto)}`;
  }
}
