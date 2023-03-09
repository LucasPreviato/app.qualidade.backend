import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Post,
  Put,
} from '@nestjs/common';
import { CreateLaboratoryInput } from './dto/create-laboratory.input';
import { UpdateLaboratoryInput } from './dto/update-laboratory.input';
import { ILaboratory } from './interfaces/laboratory.interface';
import { LaboratoriesService } from './laboratories.service';

@Controller('api/qualilabs/laboratories')
export class LaboratoriesController {
  constructor(private readonly laboratoriesService: LaboratoriesService) {}
  private readonly logger = new Logger(LaboratoriesController.name);

  @Post()
  async createLaboratory(@Body() createLaboratoryInput: CreateLaboratoryInput) {
    const laboratory = await this.laboratoriesService.create(
      createLaboratoryInput,
    );
    this.logger.log(`Laboratory created: ${laboratory.name}`);
    return laboratory;
  }
  @Get()
  async findAll(): Promise<ILaboratory[]> {
    return this.laboratoriesService.findAll();
  }

  @Get(':id')
  async findOne(@Body() id: number): Promise<ILaboratory> {
    return this.laboratoriesService.findOne(id);
  }
  @Put(':id')
  async update(
    @Body() id: number,
    @Body() updateLaboratoryInput: UpdateLaboratoryInput,
  ) {
    return this.laboratoriesService.update(id, updateLaboratoryInput);
  }
  @Delete(':id')
  async remove(@Body() id: number) {
    return this.laboratoriesService.remove(id);
  }
}
