import {UserGateway} from "../gateways/UserGateway";
import {verify} from "jsonwebtoken";

export class FollowUserUseCase {
  constructor(
      private userGateway: UserGateway
  ) {}
  async execute(input: FollowUserInput) {
    await this.verifyIfUserExists(input);
    await this.userGateway.createUserRelation(
        input.followerUserId,
        input.followedUserId
    )
  }

  async verifyIfUserExists(input: FollowUserInput) {
    await Promise.all([
      this.userGateway.validateUserExistence(input.followerUserId),
      this.userGateway.validateUserExistence(input.followedUserId)
    ]);
  }
}

export interface FollowUserInput {
  followerUserId: string,
  followedUserId: string
}

