import { Injectable } from '@nestjs/common';
import { CreateModuleOneDto } from './dto/create-module-one.dto';
import { UpdateModuleOneDto } from './dto/update-module-one.dto';

@Injectable()
export class ModuleOneService {
  create(createModuleOneDto: CreateModuleOneDto) {
    return 'This action adds a new moduleOne';
  }

  findAll() {
    return `This action returns all moduleOne`;
  }

  findOne(id: number) {
    return `This action returns a #${id} moduleOne`;
  }

  update(id: number, updateModuleOneDto: UpdateModuleOneDto) {
    return `This action updates a #${id} moduleOne`;
  }

  remove(id: number) {
    return `This action removes a #${id} moduleOne`;
  }
}
