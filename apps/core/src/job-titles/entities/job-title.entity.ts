import { ObjectType, Field, Int, OmitType } from '@nestjs/graphql';

@ObjectType()
export class JobTitle {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

@ObjectType()
export class ResolveJobTitle extends OmitType(JobTitle, [] as const) {}
