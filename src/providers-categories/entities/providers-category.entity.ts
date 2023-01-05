import { ObjectType, Field, Int, OmitType } from '@nestjs/graphql'
import { ResolveProvider } from 'src/providers/entities/provider.entity'

@ObjectType()
export class ProvidersCategory {
  @Field(() => Int)
  id: number
  @Field(() => String)
  name: string
  @Field(() => Boolean, { nullable: true })
  requiredInitialQualification?: boolean
  @Field(() => Boolean, { nullable: true })
  requiredPeriodicQualification?: boolean
  @Field(() => Boolean, { nullable: true })
  periodicCheck?: boolean
  @Field(() => Date)
  createdAt: Date
  @Field(() => [ResolveProvider], { nullable: true })
  providers?: ResolveProvider[]
}

@ObjectType()
export class ResolveProvidersCategories extends OmitType(ProvidersCategory, [
  'providers',
] as const) {}
