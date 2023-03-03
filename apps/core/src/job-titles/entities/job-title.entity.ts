import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class JobTitle {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
