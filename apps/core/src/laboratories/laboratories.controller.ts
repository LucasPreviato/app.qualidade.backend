import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateLaboratoryInput } from './dto/create-laboratory.input';
import { UpdateLaboratoryInput } from './dto/update-laboratory.input';
import { ILaboratory } from './interfaces/laboratory.interface';
import { LaboratoriesService } from './laboratories.service';

@Controller('api/qualilabs/laboratories')
export class LaboratoriesController {
  constructor(private readonly laboratoriesService: LaboratoriesService) {}
  @Post()
  async createUpdateLaboratory(
    @Body() createLaboratoryInput: CreateLaboratoryInput,
  ) {
    await this.laboratoriesService.createdLaboratory(createLaboratoryInput);
  }
  @Get()
  async findAll(): Promise<ILaboratory[]> {
    return this.laboratoriesService.findAll();
  }

  @Get(':id')
  async findOne(@Body() nickname: string): Promise<ILaboratory> {
    return this.laboratoriesService.findOne(nickname);
  }
  @Put(':id')
  async update(
    @Query() id: number,
    @Body() updateLaboratoryInput: UpdateLaboratoryInput,
  ) {
    return this.laboratoriesService.update(id, updateLaboratoryInput);
  }
  @Delete(':id')
  async remove(@Body() id: number) {
    return this.laboratoriesService.remove(id);
  }
}
