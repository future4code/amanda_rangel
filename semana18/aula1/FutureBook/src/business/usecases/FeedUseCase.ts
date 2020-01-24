import {FeedGateway} from "../gateways/feedGateway";


export class FeedUseCase {
  private static POSTS_BY_PAGE = 10;
  constructor(
    private feedGateway: FeedGateway,
  ) {}

  async execute(input: FeedInput): Promise<FeedOutput> {

    const page = input.page <= 0 ? 1 : input.page;
    console.log(page);
    const offset = FeedUseCase.POSTS_BY_PAGE * (page - 1);

    const results =  await this.feedGateway.getPostsFeedForUser(input.userId, FeedUseCase.POSTS_BY_PAGE, offset);
    return {
      posts: results.map((result: { post: { getPicture: () => any; getDescription: () => any; }; userName: any; }) => ({
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