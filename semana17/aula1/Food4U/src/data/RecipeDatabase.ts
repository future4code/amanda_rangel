import knex from "knex";
import {RecipeGateway} from "../business/gateways/RecipeGateway";
import {Recipe} from "../business/entities/Recipe";

export class RecipeDatabase implements RecipeGateway{
 private connection = knex({
    client: 'mysql',
    connection: {
      host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
      user: 'amanda',
      password: 'e8dbf5ef5c4e364476ce5fc99321a65a',
      database: 'amanda'
    }
  });

   async createRecipe(recipe: Recipe): Promise<Recipe> {
      await this.connection('food_users').insert(
      {
              title: recipe.getTitle(),
              description: recipe.getDescription(),
              userId: recipe.getUserId()
            }
      );
      return recipe;
   }
}