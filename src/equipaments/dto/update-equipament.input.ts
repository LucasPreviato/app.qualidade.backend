import { CreateEquipamentInput } from './create-equipament.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateEquipamentInput extends PartialType(CreateEquipamentInput) {
  @Field(() => Int)
  id: number
}
