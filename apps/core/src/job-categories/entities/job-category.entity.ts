import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class JobCategory {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
