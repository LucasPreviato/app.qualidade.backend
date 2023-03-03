import { Test, TestingModule } from '@nestjs/testing';
import { LaboratoriesResolver } from './laboratories.resolver';
import { LaboratoriesService } from './laboratories.service';

describe('LaboratoriesResolver', () => {
  let resolver: LaboratoriesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LaboratoriesResolver, LaboratoriesService],
    }).compile();

    resolver = module.get<LaboratoriesResolver>(LaboratoriesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
