import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { EquipamentsService } from './equipaments.service'
import { Equipament } from './entities/equipament.entity'
import { CreateEquipamentInput } from './dto/create-equipament.input'
import { UpdateEquipamentInput } from './dto/update-equipament.input'

@Resolver(() => Equipament)
export class EquipamentsResolver {
  constructor(private readonly equipamentsService: EquipamentsService) {}

  @Mutation(() => Equipament)
  createEquipament(
    @Args('createEquipamentInput') createEquipamentInput: CreateEquipamentInput
  ) {
    return this.equipamentsService.create(createEquipamentInput)
  }

  @Query(() => [Equipament], { name: 'equipaments' })
  findAll() {
    return this.equipamentsService.findAll()
  }

  @Query(() => Equipament, { name: 'equipament' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.equipamentsService.findOne(id)
  }

  @Mutation(() => Equipament)
  updateEquipament(
    @Args('updateEquipamentInput') updateEquipamentInput: UpdateEquipamentInput
  ) {
    return this.equipamentsService.update(
      updateEquipamentInput.id,
      updateEquipamentInput
    )
  }

  @Mutation(() => Equipament)
  removeEquipament(@Args('id', { type: () => Int }) id: number) {
    return this.equipamentsService.remove(id)
  }
}
