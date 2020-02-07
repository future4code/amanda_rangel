import { ChangePasswordDataSource} from "../../../dataSources/userDataSource";
import {AuthenticateDataSource} from "../../../dataSources/auth";

export class ChangePasswordUseCase {
  constructor(
    private changePasswordDataSource: ChangePasswordDataSource,
    private authenticateDataSource: AuthenticateDataSource
   ) {}

  async execute(input: ChangePasswordInput) {
    const userId = await this.authenticateDataSource.authenticate(input.token);
    return await this.changePasswordDataSource.changePassword(
      userId,
      input.newPassword
    )
  }
}

export interface ChangePasswordInput {
  token: string,
  newPassword: string,
  userId: string
}