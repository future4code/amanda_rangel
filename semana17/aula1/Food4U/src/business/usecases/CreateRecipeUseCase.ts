import {UserGateway} from "../gateways/UserGateway";
import {Recipe} from "../entities/Recipe";
import {RecipeGateway} from "../gateways/RecipeGateway";

export class CreateRecipeUseCase {
  constructor(
      private userGateway: UserGateway,
      private recipeGateway: RecipeGateway
  ) {}
  async execute(input: CreateRecipeInput): Promise<CreateRecipeOutput> {

    this.validateInput(input);
    await this.validateUserExistence(input.userId);
    const createdRecipe = await this.createRecipe(input);

    return {
      title: createdRecipe.getTitle(),
      description: createdRecipe.getDescription(),
      postDate: createdRecipe.getPostDate(),
      userId: createdRecipe.getUserId()
    }
  }

  validateInput(input: CreateRecipeInput) {
    if(!input.title || !input.description || !input.userId) {
      throw new Error('Alguma informação está faltando')
    }
  }

  async validateUserExistence(userId: string) {
    const userExists = this.userGateway.validateUserExistence(userId);
    if(!userExists) {
      throw new Error('Não é possível a criação de receita para usuário inexistente')
    }
  }

  createRecipe(input: CreateRecipeInput) {
    const newRecipe = new Recipe(
        input.title,
        input.description,
        new Date(),
        input.userId
    );
    return this.recipeGateway.createRecipe(newRecipe)
  }

}

export interface CreateRecipeInput  {
  title: string,
  description: string,
  userId: string
}

export interface CreateRecipeOutput  {
  title: string,
  description: string,
  postDate: Date,
  userId: string
}


