import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

// pipe管道,用于对参数做一些校验和转换

// pipe要实现PipeTransform接口,实现transform方法,里面可以对传入的参数值value做参数验证,比如格式、类型是否正确,不正确就抛出异常.也可以做转换,返回转换后的值.
@Injectable()
export class ValidatePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('metadata:', metadata);
    if (Number.isNaN(parseInt(value))) {
      throw new BadRequestException(`参数${metadata.data}错误`);
    }

    return typeof value === 'number' ? value * 10 : parseInt(value) * 10;
  }
}
