import { Module } from '@nestjs/common';
import { LaboratoriesService } from './laboratories.service';
import { LaboratoriesResolver } from './laboratories.resolver';

@Module({
  providers: [LaboratoriesResolver, LaboratoriesService]
})
export class LaboratoriesModule {}
