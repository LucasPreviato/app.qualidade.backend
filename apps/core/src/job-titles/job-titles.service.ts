import { Injectable } from '@nestjs/common';
import { CreateJobTitleInput } from './dto/create-job-title.input';
import { UpdateJobTitleInput } from './dto/update-job-title.input';

@Injectable()
export class JobTitlesService {
  create(createJobTitleInput: CreateJobTitleInput) {
    return 'This action adds a new jobTitle';
  }

  findAll() {
    return `This action returns all jobTitles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jobTitle`;
  }

  update(id: number, updateJobTitleInput: UpdateJobTitleInput) {
    return `This action updates a #${id} jobTitle`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobTitle`;
  }
}
