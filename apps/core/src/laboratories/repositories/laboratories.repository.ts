import { CreateLaboratoryInput } from '../dto/create-laboratory.input';
import { Laboratory } from '../entities/laboratory.entity';

export abstract class LaboratoriesRepository {
  abstract create(
    createLaboratoryInput: CreateLaboratoryInput,
  ): Promise<Laboratory>;
  abstract findAll(): Promise<Laboratory[]>;
  abstract findOne(id: number): Promise<Laboratory>;
  abstract update(id: number, laboratory: Laboratory): Promise<Laboratory>;
  abstract remove(id: number): Promise<Laboratory>;
}
