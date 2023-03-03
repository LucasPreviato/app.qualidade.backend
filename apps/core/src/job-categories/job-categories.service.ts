import { Injectable } from '@nestjs/common';
import { CreateJobCategoryInput } from './dto/create-job-category.input';
import { UpdateJobCategoryInput } from './dto/update-job-category.input';

@Injectable()
export class JobCategoriesService {
  create(createJobCategoryInput: CreateJobCategoryInput) {
    return 'This action adds a new jobCategory';
  }

  findAll() {
    return `This action returns all jobCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jobCategory`;
  }

  update(id: number, updateJobCategoryInput: UpdateJobCategoryInput) {
    return `This action updates a #${id} jobCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobCategory`;
  }
}
