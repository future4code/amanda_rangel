import {UserGateway} from "../business/gateways/UserGateway";
import {User} from "../business/entities/User";
import knex from "knex";


export class UserDatabase implements UserGateway {
  private connection = knex({
      client: 'mysql',
      connection: {
        host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
        user: 'amanda',
        password: 'e8dbf5ef5c4e364476ce5fc99321a65a',
        database: 'amanda'
      }
    });
    async registerUser(user: User) {
      await this.connection('food_users').insert(
  {
          id: user.getId(),
          email: user.getEmail(),
          password: user.getPassword()
       });
        return;
    }

  async getUserByEmail(email: string): Promise<User> {
   const result = await this.connection.raw(`
      SELECT * FROM food_users WHERE email = '${email}';
      `);
     const user = result[0][0];
     return new User(
         user.id,
         user.email,
         user.password
     )
  }

  async validateUserExistence(id: string): Promise<boolean> {
    const result = await this.connection.raw(
        `SELECT * FROM food_users WHERE id = '${id}'`
   );
    const returnedUser = result[0][0];
    return Boolean(returnedUser)
  }

  
}



