import { PartialType } from '@nestjs/mapped-types';
import { CreateTestExceptionDecoratorDto } from './create-test-exception-decorator.dto';

export class UpdateTestExceptionDecoratorDto extends PartialType(CreateTestExceptionDecoratorDto) {}
