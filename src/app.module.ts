import 'dotenv/config'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MongooseModule } from '@nestjs/mongoose'
import { UsersModule } from './modules/users/users.module'

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_ADDRESS}?retryWrites=true&w=majority`),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
