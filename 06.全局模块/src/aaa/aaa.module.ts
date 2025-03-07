import { Global, Module } from '@nestjs/common';
import { AaaService } from './aaa.service';
import { AaaController } from './aaa.controller';

// 将此模块声明为全局模块, 其他模块想使用当前模块中的provider时,就不再需要在所手动imports当先模块了
// 例如在bbb模块中想引入当前模块的话,之前是需要在bbb模块中写入imports: [aaaModule]的, 但是当aaa模块声明为全局模块后,就不再需要手动引入了
@Global()
@Module({
  controllers: [AaaController],
  providers: [AaaService],
  exports: [AaaService], // 导出provider, 可以在其他模块的module中imports AaaModule后,然后在其他模块中就可以使用这个导出的provider了
})
export class AaaModule {}
