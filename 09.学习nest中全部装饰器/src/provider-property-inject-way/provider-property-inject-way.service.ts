import { Injectable } from '@nestjs/common';
import { CreateProviderPropertyInjectWayDto } from './dto/create-provider-property-inject-way.dto';
import { UpdateProviderPropertyInjectWayDto } from './dto/update-provider-property-inject-way.dto';

@Injectable()
export class ProviderPropertyInjectWayService {
  create(createProviderPropertyInjectWayDto: CreateProviderPropertyInjectWayDto) {
    return 'This action adds a new providerPropertyInjectWay';
  }

  findAll() {
    return `This action returns all providerPropertyInjectWay`;
  }

  findOne(id: number) {
    return `This action returns a #${id} providerPropertyInjectWay`;
  }

  update(id: number, updateProviderPropertyInjectWayDto: UpdateProviderPropertyInjectWayDto) {
    return `This action updates a #${id} providerPropertyInjectWay`;
  }

  remove(id: number) {
    return `This action removes a #${id} providerPropertyInjectWay`;
  }
}
