import { Module } from '@nestjs/common';
import { JobTitlesService } from './job-titles.service';
import { JobTitlesResolver } from './job-titles.resolver';

@Module({
  providers: [JobTitlesResolver, JobTitlesService]
})
export class JobTitlesModule {}
