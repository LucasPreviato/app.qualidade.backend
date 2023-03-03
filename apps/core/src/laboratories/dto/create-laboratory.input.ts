import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLaboratoryInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
