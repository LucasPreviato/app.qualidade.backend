import { CreateJobCategoryInput } from './create-job-category.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateJobCategoryInput extends PartialType(CreateJobCategoryInput) {
  @Field(() => Int)
  id: number;
}
