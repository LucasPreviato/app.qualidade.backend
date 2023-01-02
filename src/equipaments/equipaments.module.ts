import { Module } from '@nestjs/common'
import { EquipamentsService } from './equipaments.service'
import { EquipamentsResolver } from './equipaments.resolver'

@Module({
  providers: [EquipamentsResolver, EquipamentsService],
})
export class EquipamentsModule {}
