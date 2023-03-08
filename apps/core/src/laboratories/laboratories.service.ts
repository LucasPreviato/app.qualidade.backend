import { Injectable, Logger } from '@nestjs/common';
import { CreateLaboratoryInput } from './dto/create-laboratory.input';
import { UpdateLaboratoryInput } from './dto/update-laboratory.input';
import { ILaboratory } from './interfaces/laboratory.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class LaboratoriesService {
  private laboratories: ILaboratory[] = [];

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
  }: CreateLaboratoryInput): Promise<void> {}

  async findAll(): Promise<ILaboratory[]> {
    return this.laboratories;
  }

  async findOne(nickname: string): Promise<ILaboratory> {
    const laboratory = this.laboratories.find(
      (laboratory) => laboratory.nickname === nickname,
    );
    if (laboratory) {
      this.logger.log(`Laboratory found: ${JSON.stringify(laboratory)}`);
      return laboratory;
    } else {
      this.logger.log(`Laboratory not found: ${nickname}`);
    }
  }

  async update(
    id: number,
    updateLaboratoryInput: UpdateLaboratoryInput,
  ): Promise<ILaboratory> {
    const laboratory = this.laboratories.find(
      (laboratory) => laboratory.id === id,
    );
    if (laboratory) {
      const { name, nickname, cgc, IE, IM, email, phone, website } =
        updateLaboratoryInput;
      laboratory.name = name;
      laboratory.nickname = nickname;
      laboratory.cgc = cgc;
      laboratory.IE = IE;
      laboratory.IM = IM;
      laboratory.email = email;
      laboratory.phone = phone;
      laboratory.website = website;
      this.logger.log(`Laboratory updated: ${JSON.stringify(laboratory)}`);
      return laboratory;
    }
  }

  remove(id: number) {
    return `This action removes a #${id} laboratory`;
  }
}
