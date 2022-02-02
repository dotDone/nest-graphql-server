import { MongooseModule } from '@nestjs/mongoose'
import { Module } from "@nestjs/common"
import { UsersResolver } from "./users.resolver"
import { UserSchema } from 'src/modules/users/user.schema'
import { UsersService } from './users.service'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [UsersResolver, UsersService]
})
export class UsersModule { }