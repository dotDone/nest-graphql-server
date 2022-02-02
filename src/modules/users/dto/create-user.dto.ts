import { ObjectType, Field, Int, ID } from "@nestjs/graphql"

@ObjectType()
export class UserType {
  @Field(() => ID)
  id: string

  @Field()
  readonly firstName: string

  @Field()
  readonly lastName: string

  @Field(() => Int)
  readonly age: number
}