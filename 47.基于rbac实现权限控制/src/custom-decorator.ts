import { SetMetadata } from '@nestjs/common';

// 必须登录
export const RequireLogin = () => SetMetadata('require-login', true);

export const RequirePermission = (...permissions: string[]) =>
  SetMetadata('require-permission', permissions);
