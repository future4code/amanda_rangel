import {UserRelationGateway} from "../gateways/userGateway";

export class ToggleUserRelationUseCase {
  constructor(
    private userRelationGateway: UserRelationGateway
  ) {}
  async execute(input: FollowUserInput) {
    // this.verifyIsUserExists(input);
    await this.userRelationGateway.toggleUserRelation(
      input.followerUserId,
      input.followedUserId
    )
  }

  async verifyIsUserExists(input: FollowUserInput) {
    await Promise.all([
    this.userRelationGateway.findUser(input.followerUserId),
    this.userRelationGateway.findUser(input.followedUserId)
  ]);
  }
}

export interface FollowUserInput {
  followerUserId: string,
  followedUserId: string
}