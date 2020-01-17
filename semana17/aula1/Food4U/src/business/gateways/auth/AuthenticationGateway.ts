export interface AuthenticationGateway {
  generateToken(userId: string): string
}