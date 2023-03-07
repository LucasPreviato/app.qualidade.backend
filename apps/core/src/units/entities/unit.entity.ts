import { ObjectType, Field, Int, OmitType } from '@nestjs/graphql';

@ObjectType()
export class Unit {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
@ObjectType()
export class ResolveUnit extends OmitType(Unit, [] as const) {}
