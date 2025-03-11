import { Injectable } from '@nestjs/common';
import { TestOneService } from './test-one.service';
import { TestTwoService } from './test-two.service';

@Injectable()
export class AppService {
  constructor(
    private readonly testOneService: TestOneService,
    private readonly testTwoService: TestTwoService,
  ) {}
  getHello(): string {
    return this.testOneService.print() + this.testTwoService.print();
  }
}
