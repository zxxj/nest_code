import { Controller, Get } from '@nestjs/common';
import { ModuleOneService } from './module-one.service';

@Controller({ path: 'module-one', version: '2' })
export class ModuleOneV2Controller {
  constructor(private readonly moduleOneService: ModuleOneService) {}

  // @Version 把 version 2 的接口标识一下
  // @Version('2')
  @Get()
  test() {
    return this.moduleOneService.findAll() + '222';
  }
}
