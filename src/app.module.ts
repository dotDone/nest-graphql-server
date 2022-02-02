import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MongooseModule } from '@nestjs/mongoose'

import { UsersModule } from './modules/users/users.module'

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot('mongodb+srv://graphql:HK9cc0eTxKSfav2E@main.4rcui.mongodb.net/main?retryWrites=true&w=majority'),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
