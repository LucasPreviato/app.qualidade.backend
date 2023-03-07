import { ObjectType, Field, Int, OmitType } from '@nestjs/graphql';

@ObjectType()
export class Department {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

@ObjectType()
export class ResolveDepartment extends OmitType(Department, [] as const) {}
