import { ConfigurableModuleBuilder } from '@nestjs/common';

// 不手动写 register、registerAsync 等方法了，用 builder 来生成
// 用 ConfigurableModuleBuilder 生成一个 class，这个 class 里就带了 register、registerAsync 方法。
// 返回的 ConfigurableModuleClass、MODULE_OPTIONS_TOKEN 分别是生成的 class 、options 对象的 token。

export interface TestTwoModuleOpions {
  name: string;
  age: number;
}

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<TestTwoModuleOpions>().build();
