import { Injectable } from '@nestjs/common';
import { RolesService } from 'src/roles/roles.service';
import { UsersRepository } from './model/users.repository';
import { ActivationStatus } from './enum/activation-status.enum';

@Injectable()
export class UsersService {
  constructor(
    protected userRepository: UsersRepository,
    protected roleService: RolesService,
  ){}

  async findAll() {
    return await this.userRepository.find({});
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOne({ email });
  }

  async find(id: string) {
    return await this.userRepository.findOne({ id });
  }
  
  async create(userData: any) {
    return await this.userRepository.create(userData);
  }
  
  async activateUser(id: string) {
    return await this.userRepository.findOneAndUpdate({ _id: id }, { activationStatus: ActivationStatus.ACTIVED });
  }
  
  async deactivateUser(id: string) {
    return await this.userRepository.findOneAndUpdate({ _id: id }, { activationStatus: ActivationStatus.NOT_ACTIVE });
  }
}

