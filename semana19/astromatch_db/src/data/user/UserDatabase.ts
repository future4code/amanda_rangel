import {KnexDatabaseConnection} from "../knex/knexDatabaseConnection";
import {RegisterUserGateway} from "../../business/gateways/user/userGateway";
import {User} from "../../business/entities/User";

export class UserDatabase extends  KnexDatabaseConnection implements
  RegisterUserGateway {

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
}
