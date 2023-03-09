import { Injectable, Logger } from '@nestjs/common';
import { CreateLaboratoryInput } from 'src/laboratories/dto/create-laboratory.input';
import { Laboratory } from 'src/laboratories/entities/laboratory.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PrismaLaboratoriesRepository {
  constructor(private readonly prisma: PrismaService) {}
  private readonly logger = new Logger(PrismaLaboratoriesRepository.name);

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
    const newLaboratory = await this.prisma.laboratory.create({
      data: {
        name,
        nickname,
        cgc,
        IE,
        IM,
        email,
        phone,
        website,
      },
    });
    this.logger.log(`Laboratory created in database: ${name}`);
    return newLaboratory;
  }
  async findAll(): Promise<Laboratory[]> {
    const laboratories = await this.prisma.laboratory.findMany();
    return laboratories;
  }
  async findOne(id: number): Promise<Laboratory> {
    const laboratory = await this.prisma.laboratory.findUnique({
      where: { id },
    });
    return laboratory;
  }
  async update(id: number, laboratory: Laboratory): Promise<Laboratory> {
    const updatedLaboratory = await this.prisma.laboratory.update({
      where: { id },
      data: laboratory,
    });
    return updatedLaboratory;
  }
  async remove(id: number): Promise<Laboratory> {
    const removeLaboratory = await this.prisma.laboratory.delete({
      where: { id },
    });
    return removeLaboratory;
  }
}
