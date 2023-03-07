// import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
// import { LaboratoriesService } from './laboratories.service';
// import { Laboratory } from './entities/laboratory.entity';
// import { CreateLaboratoryInput } from './dto/create-laboratory.input';
// import { UpdateLaboratoryInput } from './dto/update-laboratory.input';

// @Resolver(() => Laboratory)
// export class LaboratoriesResolver {
//   constructor(private readonly laboratoriesService: LaboratoriesService) {}

//   @Mutation(() => Laboratory)
//   createLaboratory(@Args('createLaboratoryInput') createLaboratoryInput: CreateLaboratoryInput) {
//     return this.laboratoriesService.create(createLaboratoryInput);
//   }

//   @Query(() => [Laboratory], { name: 'laboratories' })
//   findAll() {
//     return this.laboratoriesService.findAll();
//   }

//   @Query(() => Laboratory, { name: 'laboratory' })
//   findOne(@Args('id', { type: () => Int }) id: number) {
//     return this.laboratoriesService.findOne(id);
//   }

//   @Mutation(() => Laboratory)
//   updateLaboratory(@Args('updateLaboratoryInput') updateLaboratoryInput: UpdateLaboratoryInput) {
//     return this.laboratoriesService.update(updateLaboratoryInput.id, updateLaboratoryInput);
//   }

//   @Mutation(() => Laboratory)
//   removeLaboratory(@Args('id', { type: () => Int }) id: number) {
//     return this.laboratoriesService.remove(id);
//   }
// }
