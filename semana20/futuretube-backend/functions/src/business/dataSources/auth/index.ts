export interface AuthenticateDataSource {
  authenticate(token: string): Promise<string>
}