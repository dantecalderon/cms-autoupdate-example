import { ObjectID } from "typeorm"
import { ObjectType, Field, ID } from "type-graphql"

@ObjectType()
class Post {
  @Field(() => ID)
  _id: ObjectID

  @Field()
  title: string  

  @Field(() => [String])
  bodies: [string]
}

export default Post