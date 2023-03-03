import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { JobTitlesService } from './job-titles.service';
import { JobTitle } from './entities/job-title.entity';
import { CreateJobTitleInput } from './dto/create-job-title.input';
import { UpdateJobTitleInput } from './dto/update-job-title.input';

@Resolver(() => JobTitle)
export class JobTitlesResolver {
  constructor(private readonly jobTitlesService: JobTitlesService) {}

  @Mutation(() => JobTitle)
  createJobTitle(@Args('createJobTitleInput') createJobTitleInput: CreateJobTitleInput) {
    return this.jobTitlesService.create(createJobTitleInput);
  }

  @Query(() => [JobTitle], { name: 'jobTitles' })
  findAll() {
    return this.jobTitlesService.findAll();
  }

  @Query(() => JobTitle, { name: 'jobTitle' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.jobTitlesService.findOne(id);
  }

  @Mutation(() => JobTitle)
  updateJobTitle(@Args('updateJobTitleInput') updateJobTitleInput: UpdateJobTitleInput) {
    return this.jobTitlesService.update(updateJobTitleInput.id, updateJobTitleInput);
  }

  @Mutation(() => JobTitle)
  removeJobTitle(@Args('id', { type: () => Int }) id: number) {
    return this.jobTitlesService.remove(id);
  }
}
