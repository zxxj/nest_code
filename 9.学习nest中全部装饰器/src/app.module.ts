import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProviderPropertyInjectWayModule } from './provider-property-inject-way/provider-property-inject-way.module';
import { ProviderPropertyInjectWayService } from './provider-property-inject-way/provider-property-inject-way.service';
import { TestGlobalModuleDecoratorModule } from './test-global-module-decorator/test-global-module-decorator.module';
import { TestExceptionDecoratorModule } from './test-exception-decorator/test-exception-decorator.module';

// @Module装饰器: Nest提供了一套模块系统,通过@Module声明表示一个模块
@Module({
  imports: [ProviderPropertyInjectWayModule, TestGlobalModuleDecoratorModule, TestExceptionDecoratorModule],
  controllers: [AppController],
  providers: [
    AppService,

    // 自定义provider: token也可以是字符串
    {
      provide: 'providerPropertyInjectWay',
      useClass: ProviderPropertyInjectWayService,
    },

    // useFactory注入方式
    {
      provide: 'providerUseFactoryInjectWay',
      useFactory() {
        return {
          username: 'xin',
          age: 18,
        };
      },
    },

    // 测试@Optional装饰器
  ],
})
export class AppModule {}
