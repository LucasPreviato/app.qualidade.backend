import { Test, TestingModule } from '@nestjs/testing'
import { EquipamentsResolver } from './equipaments.resolver'
import { EquipamentsService } from './equipaments.service'

describe('EquipamentsResolver', () => {
  let resolver: EquipamentsResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EquipamentsResolver, EquipamentsService],
    }).compile()

    resolver = module.get<EquipamentsResolver>(EquipamentsResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
