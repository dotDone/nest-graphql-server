import { Resolver, Query, Mutation, Args } from "@nestjs/graphql"
import { UserType } from "./dto/create-user.dto"
import { UsersService } from "./users.service"
import { UserInput } from "./inputs/user.input"


@Resolver()
export class UsersResolver {
  constructor(
    private usersService: UsersService,
  ) { }

  @Query(() => String)
  async hello() {
    return 'hello'
  }

  @Query(() => [UserType])
  async users() {
    return this.usersService.findAll()
  }

  @Mutation(() => UserType)
  async createUser(@Args('input') input: UserInput) {
    return this.usersService.create(input)
  }

}