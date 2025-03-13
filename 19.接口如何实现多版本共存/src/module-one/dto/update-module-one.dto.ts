import { PartialType } from '@nestjs/mapped-types';
import { CreateModuleOneDto } from './create-module-one.dto';

export class UpdateModuleOneDto extends PartialType(CreateModuleOneDto) {}
