import { ObjectType, Field, Int, OmitType } from '@nestjs/graphql';

@ObjectType()
export class JobCategory {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

@ObjectType()
export class ResolveJobCategory extends OmitType(JobCategory, [] as const) {}
