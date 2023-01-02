import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateEquipamentInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
