export interface EncryptGateway {
  encrypt(word: string): Promise<string>;
}

export interface CompareGateway {
  compare(word: string, hash: string): Promise<boolean>;
}