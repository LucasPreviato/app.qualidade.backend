import { Test, TestingModule } from '@nestjs/testing';
import { JobCategoriesResolver } from './job-categories.resolver';
import { JobCategoriesService } from './job-categories.service';

describe('JobCategoriesResolver', () => {
  let resolver: JobCategoriesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobCategoriesResolver, JobCategoriesService],
    }).compile();

    resolver = module.get<JobCategoriesResolver>(JobCategoriesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
