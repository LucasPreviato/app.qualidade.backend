import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateLaboratoryInput } from './dto/create-laboratory.input';
import { ILaboratory } from './interfaces/laboratory.interface';
import { LaboratoriesService } from './laboratories.service';

@Controller('api/qualilabs/laboratories')
export class LaboratoriesController {
  constructor(private readonly laboratoriesService: LaboratoriesService) {}
  @Post()
  async createUpdateLaboratory(
    @Body() createLaboratoryInput: CreateLaboratoryInput,
  ) {
    await this.laboratoriesService.createdUpdateLaboratory(
      createLaboratoryInput,
    );
  }
  @Get('all')
  async findAll(): Promise<ILaboratory[]> {
    return this.laboratoriesService.findAllLaboratories();
  }
}
