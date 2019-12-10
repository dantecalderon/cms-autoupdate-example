import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import Express from 'express'
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import createSchema from './utils/createSchema'
import config from './config'

const main = async () => {
  await createConnection({
    type: 'mongodb',
    url: config.mongoUrl,
    useUnifiedTopology: true
  })

  const schema =  await createSchema()

  const apolloServer = await new ApolloServer({
    schema
  })

  const app = Express()

  apolloServer.applyMiddleware({ app })

  app.listen(config.port, () => {
    console.log(`Listening on port http://localhost:${config.port}`)
  })
}

main()