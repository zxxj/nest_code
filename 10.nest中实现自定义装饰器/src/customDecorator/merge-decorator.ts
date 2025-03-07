import { applyDecorators, Get, UseGuards } from '@nestjs/common';
import { CustomDecorator } from './custom-decorator.decorator';
import { TestGuard } from '../test.guard';

// 合并装饰器
export const MergeDecorator = (path: string, role: string) => {
  return applyDecorators(
    Get(path),
    CustomDecorator(role),
    UseGuards(TestGuard),
  );
};
