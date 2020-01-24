import {CreatePostGateway} from "../gateways/postGateway";
import {Post} from "../entities/Post";
import {UserRelationGateway} from "../gateways/userGateway";

export class CreatePostUseCase {
  constructor(
    private createPostGateway: CreatePostGateway,
    private userRelationGateway: UserRelationGateway
  ) {}

  async execute(input: CreatePostInput): Promise<CreatePostOutput> {
    this.validatePostInput(input);
    await this.verifyIfUserExists(input.userId);
    const createdPost = await this.createPost(input);

    return {
      picture: createdPost.getPicture(),
      description: createdPost.getDescription(),
      postDate: createdPost.getPostDate(),
      postType: createdPost.getPostType(),
      userId: createdPost.getUserId()
    }
  }

  validatePostInput(input: CreatePostInput) {
    if(!(input.picture
      && input.description
      && input.postType
      && input.userId)) {
      throw new Error("Alguma informação está faltando")
    }
  }

  async verifyIfUserExists(userId:string){
    const userExists = this.userRelationGateway.findUser(userId);
    if(!userExists) {
      throw new Error("Não foi possível a criação do post. Usuário não existe")
    }
  }

  createPost(input: CreatePostInput) {
    const newPost = new Post(
      input.picture,
      input.description,
      new Date(),
      input.postType,
      input.userId
    );
    return this.createPostGateway.createPost(newPost)
  }


}


export interface CreatePostInput {
  picture: string,
  description: string,
  postType: string
  userId: string
}

export interface CreatePostOutput {
  picture: string,
  description: string,
  postType: string
  postDate: Date
  userId: string
}