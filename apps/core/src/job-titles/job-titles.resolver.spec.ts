import { Test, TestingModule } from '@nestjs/testing';
import { JobTitlesResolver } from './job-titles.resolver';
import { JobTitlesService } from './job-titles.service';

describe('JobTitlesResolver', () => {
  let resolver: JobTitlesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobTitlesResolver, JobTitlesService],
    }).compile();

    resolver = module.get<JobTitlesResolver>(JobTitlesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
