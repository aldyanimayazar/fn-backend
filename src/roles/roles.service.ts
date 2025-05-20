import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RolesRepository } from './model/roles.repository';

@Injectable()
export class RolesService {
  constructor(
    protected rolesRepository: RolesRepository
  ){}
  async create(createRoleDto: CreateRoleDto) {
    return await this.rolesRepository.create(createRoleDto);
  }

  async findAll() {
    return await this.rolesRepository.find({});
  }

  async findbyId(rolesId: string) {
    return await this.rolesRepository.findOne({rolesId});
  }
}
