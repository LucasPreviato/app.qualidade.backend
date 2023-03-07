import { ObjectType, Field, Int, OmitType } from '@nestjs/graphql';

@ObjectType()
export class Employee {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

@ObjectType()
export class ResolveEmployee extends OmitType(Employee, [] as const) {}
