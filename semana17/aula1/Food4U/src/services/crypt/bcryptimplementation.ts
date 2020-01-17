import * as bcrypt from "bcrypt"
import {CryptographyGateway} from "../../business/gateways/auth/CryptographyGateway";

export class Bcryptimplementation implements CryptographyGateway {
  private static BCRYPT_SALT_ROUNDS = 10;
  async encrypt(word: string): Promise<string> {
    const salt = await bcrypt.genSalt(Bcryptimplementation.BCRYPT_SALT_ROUNDS);
    return await bcrypt.hash(
        word,
        salt
    );
  }
  async compare(word:string, hash: string): Promise<boolean> {
    return await bcrypt.compare(word, hash)
  }
}