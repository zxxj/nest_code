import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const a = 10;
    console.log(a);
    return 'Hello World!1111';
  }
}
