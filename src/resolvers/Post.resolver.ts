import { Resolver, Query } from "type-graphql";
import Post from "../models/Post";

@Resolver(Post)
class PostResolver {
  @Query(() => [Post])
  async posts() {
    return [{
      _id: '',
      title: 'HOla',
      bodies: ['jo']
    }]
  }
}

export default PostResolver