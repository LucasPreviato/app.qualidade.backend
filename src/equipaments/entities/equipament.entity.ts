import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class Equipament {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
