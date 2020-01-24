export interface EncryptGateway {
  encrypt(word: string): Promise<string>
}