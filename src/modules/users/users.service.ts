import { Model } from "mongoose"
import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { User } from "./interfaces/user.interface"
import { UserInput } from "./inputs/user.input"


@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  async create(createUserDto: UserInput): Promise<User> {
    const createdUser = new this.userModel(createUserDto)
    return await createdUser.save()
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec()
  }
}
