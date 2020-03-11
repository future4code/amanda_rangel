import {RegisterUserGateway} from "../../business/gateways/userGateway";
import {User} from "../../business/entities/User";
import {db} from "../../index";


export class UserDatabase implements RegisterUserGateway {
  private static USER_COLLECTION: string = 'users';

  async registerUser(user: User): Promise<void> {
    await db.collection(UserDatabase.USER_COLLECTION).doc(user.getId()).set({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        dateOfBirth: user.getDateOfBirth(),
        picture: user.getPicture(),
        password: user.getPassword()
    })
  }

  // private UserDbModel(dbModel: any): User {
  //   return new User(
  //     dbModel.id,
  //     dbModel.name,
  //     dbModel.email,
  //     dbModel.dateOfBirth,
  //     dbModel.picture,
  //     dbModel.password    )
  // }
}