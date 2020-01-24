import {FeedGateway} from "../gateways/feedGateway";


export class GetFeedUseCase {
  private static POSTS_BY_PAGE = 10;
  constructor(
    private feedGateway: FeedGateway,
  ) {}

  async execute(input: FeedInput): Promise<FeedOutput> {

    const page = input.page <= 0 ? 1 : input.page;
    const offset = GetFeedUseCase.POSTS_BY_PAGE * (page - 1);

    const results =  await this.feedGateway.getPostsForUserFeed(input.userId, GetFeedUseCase.POSTS_BY_PAGE, offset);
    return {
      posts: results.map((result) => ({
          picture: result.post.getPicture(),
          description: result.post.getDescription(),
          userName: result.userName
        }))
      }
    }
  }

export interface FeedInput {
  userId: string,
  page: number
}

export interface FeedOutput {
  posts: Array<{
    picture: string,
    description: string,
    userName: string
  }>
}