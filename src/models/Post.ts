import { ObjectID } from "typeorm"
import { ObjectType, Field, ID } from "type-graphql"


@ObjectType()
class Post {
  @Field(type => ID)
  _id: ObjectID

  @Field()
  title: string  

  @Field(type => [String])
  bodies: [string]
}

export default Post