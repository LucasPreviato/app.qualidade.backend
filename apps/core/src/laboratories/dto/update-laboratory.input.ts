import { CreateLaboratoryInput } from './create-laboratory.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLaboratoryInput extends PartialType(CreateLaboratoryInput) {
  @Field(() => Int)
  id: number;
}
