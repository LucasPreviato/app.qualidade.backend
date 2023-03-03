import { Module } from '@nestjs/common';
import { JobCategoriesService } from './job-categories.service';
import { JobCategoriesResolver } from './job-categories.resolver';

@Module({
  providers: [JobCategoriesResolver, JobCategoriesService]
})
export class JobCategoriesModule {}
