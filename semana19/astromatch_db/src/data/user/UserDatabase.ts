import {KnexDatabaseConnection} from "../knex/knexDatabaseConnection";
import {GetUserGateway, RegisterUserGateway} from "../../business/gateways/user/userGateway";
import {User} from "../../business/entities/User";

export class UserDatabase extends  KnexDatabaseConnection implements
  RegisterUserGateway,
  GetUserGateway {

  private static USER_TABLE: string = 'users';

  async registerUser(user: User): Promise<void> {
    await this.connection.raw(
      `INSERT INTO ${UserDatabase.USER_TABLE} (id, name, email, date_of_birth, picture, password)
       VALUES(
          '${user.getId()}',
          '${user.getName()}',
          '${user.getEmail()}',
          '${user.getDateOfBirth()}',
          '${user.getPicture()}',
          '${user.getPassword()}'        
        )`
    )
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    try {
      const result = await this.connection.raw(
        `SELECT * FROM ${UserDatabase.USER_TABLE} 
         WHERE email='${email}'`
      );
      return result[0].length === 0 ? undefined : this.UserDbModel(result[0][0]);
    }catch (error) {
      throw new Error(error.message)
    }
  }

  private UserDbModel(dbModel: any): User {
    return new User(
      dbModel.id,
      dbModel.name,
      dbModel.email,
      dbModel.dateOfBirth,
      dbModel.picture,
      dbModel.password
    )
  }
}
