import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateJobCategoryInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
