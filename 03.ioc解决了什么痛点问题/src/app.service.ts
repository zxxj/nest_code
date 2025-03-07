import { Inject, Injectable } from '@nestjs/common';
import { OtherService } from './other/other.service';

// @Injectable(): 代表这个class可注入,那么nest就会把它的对象放到IOC容器里.
@Injectable()
export class AppService {
  @Inject(OtherService)
  private otherService: OtherService;

  getHello(): string {
    return 'Hello World!' + this.otherService.xxx();
  }
}
