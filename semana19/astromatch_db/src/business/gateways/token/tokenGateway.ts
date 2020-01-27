export interface GenerateTokenGateway {
  generateToken(input: any): string;
}

export interface VerifyTokenGateway {
  verifyToken(input: string): any;
}