import { v4 } from "uuid";
import {IdGeneratorGateway} from "../../business/gateways/IdGeneratorGateway";

export class V4IdGenerator implements IdGeneratorGateway {
  public generateId(): string {
    return v4();
  }
}
