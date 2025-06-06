import { Injectable } from '@nestjs/common';
import { CreateBranchDto } from './dto/create-branch.dto';
import { BranchRepository } from './model/branch.repository';
import { UpdateBranchDto } from './dto/update-branch.dto';

@Injectable()
export class BranchService {
  constructor(private readonly branchRepository: BranchRepository) {}
  
   create(dto: CreateBranchDto) {
    return this.branchRepository.create(dto);
  }

  findAll() {
    return this.branchRepository.find({});
  }

  findById(id: string) {
    return this.branchRepository.findOne({id});
  }

  findOneAndUpdate(id: string, updateDto: UpdateBranchDto) {
    return this.branchRepository.findOneAndUpdate({ _id: id }, updateDto);
  }
}
