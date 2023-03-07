import { ObjectType, Field, Int, OmitType } from '@nestjs/graphql';

@ObjectType()
export class Laboratory {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

@ObjectType()
export class ResolveLaboratory extends OmitType(Laboratory, [] as const) {}
