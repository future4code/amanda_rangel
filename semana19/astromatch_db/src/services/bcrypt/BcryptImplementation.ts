import * as bcrypt from "bcrypt"
import {CompareGateway, EncryptGateway} from "../../business/gateways/bcrypt/bcryptGateway";


export class BcryptImplementation implements EncryptGateway, CompareGateway {
  private static BCRYPT_SALT_ROUNDS = 10;

  async encrypt(word: string): Promise<string> {
    const salt = await bcrypt.genSalt(BcryptImplementation.BCRYPT_SALT_ROUNDS);
    return bcrypt.hash(word, salt);
  }

  async compare(word: string, hash: string): Promise<boolean> {
    return bcrypt.compare(word, hash);
  }
}