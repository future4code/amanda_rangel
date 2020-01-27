import {FeedGateway} from "../gateways/feedGateway";


export class GetFeedByTypeUseCase {

  private static POSTS_BY_PAGE = 10;
  constructor(
    private feedGateway: FeedGateway
  ) {}

  async execute(input: FeedByTypeInput): Promise<FeedByTypeOutput> {

    const page = input.page <= 0 ? 1 : input.page;
    const offset = GetFeedByTypeUseCase.POSTS_BY_PAGE * (page - 1);

    const results =  await this.feedGateway.getPostsByTypeForFeed(input.userId, input.postType, GetFeedByTypeUseCase.POSTS_BY_PAGE, offset);
    return {
      posts: results.map((result) => ({
        picture: result.post.getPicture(),
        description: result.post.getDescription(),
        postType: result.post.getPostType(),
        userName: result.userName,
      }))
    }
  }
}

export interface FeedByTypeInput{
  userId: string,
  page: number,
  postType: string
}

export interface FeedByTypeOutput {
  posts: Array<{
    picture: string,
    description: string,
    postType: string,
    userName: string,
  }>
}

