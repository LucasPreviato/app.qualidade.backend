import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { JobCategoriesService } from './job-categories.service';
import { JobCategory } from './entities/job-category.entity';
import { CreateJobCategoryInput } from './dto/create-job-category.input';
import { UpdateJobCategoryInput } from './dto/update-job-category.input';

@Resolver(() => JobCategory)
export class JobCategoriesResolver {
  constructor(private readonly jobCategoriesService: JobCategoriesService) {}

  @Mutation(() => JobCategory)
  createJobCategory(@Args('createJobCategoryInput') createJobCategoryInput: CreateJobCategoryInput) {
    return this.jobCategoriesService.create(createJobCategoryInput);
  }

  @Query(() => [JobCategory], { name: 'jobCategories' })
  findAll() {
    return this.jobCategoriesService.findAll();
  }

  @Query(() => JobCategory, { name: 'jobCategory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.jobCategoriesService.findOne(id);
  }

  @Mutation(() => JobCategory)
  updateJobCategory(@Args('updateJobCategoryInput') updateJobCategoryInput: UpdateJobCategoryInput) {
    return this.jobCategoriesService.update(updateJobCategoryInput.id, updateJobCategoryInput);
  }

  @Mutation(() => JobCategory)
  removeJobCategory(@Args('id', { type: () => Int }) id: number) {
    return this.jobCategoriesService.remove(id);
  }
}
