import { PartialType } from '@nestjs/mapped-types';
import { CreateProviderPropertyInjectWayDto } from './create-provider-property-inject-way.dto';

export class UpdateProviderPropertyInjectWayDto extends PartialType(CreateProviderPropertyInjectWayDto) {}
