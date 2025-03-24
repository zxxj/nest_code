import { ConsoleLogger, LoggerService } from '@nestjs/common';

// 1.自定义日志打印的方式, 实现LoggerService接口
// export class MyLogger implements LoggerService {
//   log(message: string, context: string) {
//     console.log(`---log---[${context}]---`, message);
//   }

//   error(message: string, context: string) {
//     console.log(`---error---[${context}]---`, message);
//   }

//   warn(message: string, context: string) {
//     console.log(`---warn---[${context}]---`, message);
//   }
// }

// 2.也可以不实现LoggerService接口,而是继承ConsoleLogger,重写一些方法,因为ConsoleLogger中实现了LoggerService接口
export class MyLogger extends ConsoleLogger {
  log(message: string, context: string) {
    console.log(`[${context}]`, message);
  }
}
