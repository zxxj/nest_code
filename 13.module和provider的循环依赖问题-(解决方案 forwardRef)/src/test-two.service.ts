import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { TestOneService } from './test-one.service';

@Injectable()
export class TestTwoService {
  constructor(
    @Inject(forwardRef(() => TestOneService))
    private readonly testOneService: TestOneService,
  ) {}

  print() {
    return 'testTwoPrint';
  }
}
