import { Module } from '@nestjs/common';
import { LaboratoriesService } from './laboratories.service';
// import { LaboratoriesResolver } from './laboratories.resolver';
import { LaboratoriesController } from './laboratories.controller';

@Module({
  providers: [LaboratoriesService],
  controllers: [LaboratoriesController],
})
export class LaboratoriesModule {}
