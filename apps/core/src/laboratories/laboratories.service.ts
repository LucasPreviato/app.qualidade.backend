import { Injectable, Logger } from '@nestjs/common';
import { CreateLaboratoryInput } from './dto/create-laboratory.input';
import { UpdateLaboratoryInput } from './dto/update-laboratory.input';
import { ILaboratory } from './interfaces/laboratory.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class LaboratoriesService {
  private laboratories: ILaboratory[] = [];
  private readonly logger = new Logger(LaboratoriesService.name);
  async createdUpdateLaboratory(
    createLaboratoryInput: CreateLaboratoryInput,
  ): Promise<void> {
    await this.create(createLaboratoryInput);
  }
  async findAllLaboratories(): Promise<ILaboratory[]> {
    return await this.laboratories;
  }

  private create(createLaboratoryInput: CreateLaboratoryInput): void {
    const { name, nickname, cgc, IE, IM, email, phone, website } =
      createLaboratoryInput;
    const laboratory: ILaboratory = {
      id: uuidv4(),
      name,
      nickname,
      cgc,
      IE,
      IM,
      email,
      phone,
      website,
    };
    this.logger.log(`Laboratory created: ${JSON.stringify(laboratory)}`);
  }

  findAll() {
    return `This action returns all laboratories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} laboratory`;
  }

  update(id: number, updateLaboratoryInput: UpdateLaboratoryInput) {
    return `This action updates a #${id} laboratory`;
  }

  remove(id: number) {
    return `This action removes a #${id} laboratory`;
  }
}
