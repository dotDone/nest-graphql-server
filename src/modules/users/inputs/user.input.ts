import { InputType, Field, Int } from "@nestjs/graphql"


@InputType()
export class UserInput {
  @Field()
  readonly firstName: string

  @Field()
  readonly lastName: string

  @Field(() => Int)
  readonly age: number
}