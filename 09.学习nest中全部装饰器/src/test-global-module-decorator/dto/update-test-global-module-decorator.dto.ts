import { PartialType } from '@nestjs/mapped-types';
import { CreateTestGlobalModuleDecoratorDto } from './create-test-global-module-decorator.dto';

export class UpdateTestGlobalModuleDecoratorDto extends PartialType(CreateTestGlobalModuleDecoratorDto) {}
