import { buildSchema } from "type-graphql"

const createSchema = () => 
  buildSchema({
    resolvers: []
  })


export default createSchema