import { CreateJobTitleInput } from './create-job-title.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateJobTitleInput extends PartialType(CreateJobTitleInput) {
  @Field(() => Int)
  id: number;
}
