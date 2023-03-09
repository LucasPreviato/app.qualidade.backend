import { ObjectType, Field, Int, OmitType } from '@nestjs/graphql';
import { ILaboratory } from '../interfaces/laboratory.interface';

@ObjectType()
export class Laboratory implements ILaboratory {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field({ nullable: false })
  name: string;
  @Field({ nullable: true })
  nickname?: string;
  @Field({ nullable: true })
  cgc?: string;
  @Field({ nullable: true })
  IE?: string;
  @Field({ nullable: true })
  IM?: string;
  @Field({ nullable: true })
  email?: string;
  @Field({ nullable: true })
  phone?: string;
  @Field({ nullable: true })
  website?: string;
}

@ObjectType()
export class ResolveLaboratory extends OmitType(Laboratory, [] as const) {}
