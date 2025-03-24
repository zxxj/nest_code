import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private logger = new Logger();

  @Get()
  getHello(): string {
    this.logger.debug('debug', AppController.name);
    this.logger.error('error', AppController.name);
    this.logger.fatal('fatal', AppController.name);
    this.logger.log('log', AppController.name);
    this.logger.verbose('verbose', AppController.name);
    this.logger.warn('warn', AppController.name);
    return this.appService.getHello();
  }
}
