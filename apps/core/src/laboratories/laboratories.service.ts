import { Injectable, Logger } from '@nestjs/common';
import { CreateLaboratoryInput } from './dto/create-laboratory.input';
import { UpdateLaboratoryInput } from './dto/update-laboratory.input';
import { Laboratory } from './entities/laboratory.entity';
import { PrismaLaboratoriesRepository } from './repositories/prisma/prisma.laboratories.repository';

@Injectable()
export class LaboratoriesService {
  constructor(
    private prismaLaboratoriesRepository: PrismaLaboratoriesRepository,
  ) {}
  private readonly logger = new Logger(LaboratoriesService.name);

  async create({
    name,
    nickname,
    cgc,
    IE,
    IM,
    email,
    phone,
    website,
  }: CreateLaboratoryInput): Promise<Laboratory> {
    this.logger.log(`Creating laboratory: ${name}`);
    const laboratory = {
      name,
      nickname,
      cgc,
      IE,
      IM,
      email,
      phone,
      website,
    };
    await this.prismaLaboratoriesRepository.create(laboratory);
    this.logger.log(`Laboratory created: ${name}`);
    return laboratory;
  }

  async findAll(): Promise<Laboratory[]> {
    this.logger.log(`Finding all laboratories`);
    const laboratories = await this.prismaLaboratoriesRepository.findAll();
    return laboratories;
  }

  async findOne(id: number): Promise<Laboratory> {
    this.logger.log(`Finding laboratory: ${id}`);
    const laboratory = await this.prismaLaboratoriesRepository.findOne(id);
    if (!laboratory) {
      this.logger.error(`Laboratory not found: ${id}`);
      return null;
    }
    return laboratory;
  }

  async update(
    id: number,
    {
      name,
      nickname,
      cgc,
      IE,
      IM,
      email,
      phone,
      website,
    }: UpdateLaboratoryInput,
  ): Promise<Laboratory> {
    const laboratory = await this.prismaLaboratoriesRepository.update(id, {
      id,
      name,
      nickname,
      cgc,
      IE,
      IM,
      email,
      phone,
      website,
    });
    return laboratory;
  }

  async remove(id: number): Promise<void> {
    this.logger.log(`Removing laboratory: ${id}`);
    const laboratory = await this.prismaLaboratoriesRepository.findOne(id);
    if (!laboratory) {
      this.logger.error(`Laboratory not found: ${id}`);
      return null;
    }
    await this.prismaLaboratoriesRepository.remove(id);
  }
}
