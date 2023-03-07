import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateLaboratoryInput {
  @Field()
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
  email: string;
  @Field({ nullable: true })
  phone?: string;
  @Field({ nullable: true })
  website?: string;
}
