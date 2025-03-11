import { DynamicModule, Module } from '@nestjs/common';
import { TestOneService } from './test-one.service';
import { TestOneController } from './test-one.controller';

@Module({})
export class TestOneModule {
  // 有时如果在import的时候给这个模块传一些参数,根据参数来动态生成模块的内容,可以改写为以下Dynamic Module形式

  // 改写为静态方法,返回模块定义的对象
  static register(options: Record<string, any>): DynamicModule {
    return {
      module: TestOneModule,
      controllers: [TestOneController],
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options,
        },
        TestOneService,
      ],
      exports: [],
    };
  }
}
