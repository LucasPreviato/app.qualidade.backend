import { ObjectType, Field, Int, OmitType } from '@nestjs/graphql'
import { ResolveProvidersCategories } from 'src/providers-categories/entities/providers-category.entity'

@ObjectType()
export class Provider {
  @Field(() => Int)
  id: number
  @Field(() => String)
  name: string
  @Field(() => String)
  nickname: string
  @Field(() => String)
  cnpj: string
  @Field(() => String)
  email: string
  @Field(() => String)
  phone: string
  @Field(() => Boolean)
  critical: boolean
  @Field(() => Boolean)
  status: boolean
  @Field(() => ResolveProvidersCategories)
  providersCategory: ResolveProvidersCategories
}

@ObjectType()
export class ResolveProvider extends OmitType(Provider, [
  'providersCategory',
] as const) {}
