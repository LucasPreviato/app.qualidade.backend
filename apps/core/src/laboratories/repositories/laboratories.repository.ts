import { CreateLaboratoryInput } from '../dto/create-laboratory.input';
import { ILaboratory } from '../interfaces/laboratory.interface';

export abstract class LaboratoriesRepository {
  abstract cre(
    createLaboratoryInput: CreateLaboratoryInput,
  ): Promise<void>;
  abstract findAll(): Promise<ILaboratory[]>;
}
