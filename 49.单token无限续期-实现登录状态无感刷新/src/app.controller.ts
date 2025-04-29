import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 不需要权限的接口
  @Get('no-auth')
  noAuth() {
    return 'no-auth';
  }

  // 需要权限的接口
  @Get('need-auth')
  @UseGuards(LoginGuard)
  needAuth() {
    return 'need-auth';
  }
}
