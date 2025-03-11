import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { TestTwoService } from './test-two.service';
@Injectable()
export class TestOneService {
  // testOneService注入testTwoService并且testTwoService注入testOneService时,也会产生循环依赖,同样是通过forwardRef来实现让nest先创建好provider,再把引用转发到对方.
  constructor(
    @Inject(forwardRef(() => TestTwoService))
    private readonly testTwoService: TestTwoService,
  ) {}

  print() {
    return 'testOnePrint';
  }
}
