import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import Express from 'express'
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import * as dotenv from 'dotenv'

dotenv.config()


const main = async () => {
  await createConnection({
    type: 'mongodb',
    url: process.env.MONGO_URL,
    useUnifiedTopology: true
  })



}

main()