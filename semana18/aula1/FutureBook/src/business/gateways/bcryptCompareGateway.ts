export interface BcryptCompareGateway {
  compare(word: string, hash: string): Promise<boolean>
}