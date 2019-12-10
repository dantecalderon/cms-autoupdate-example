import { buildSchema } from "type-graphql"

import PostResolver from '../resolvers/Post.resolver'


const createSchema = () => 
  buildSchema({
    resolvers: [
      PostResolver
    ]
  })


export default createSchema