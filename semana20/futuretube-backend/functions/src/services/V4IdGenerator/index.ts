import { v4 } from "uuid";
import {IdGeneratorDataSource} from "../../business/dataSources/idGeneratorDataSource";

export class V4IdGenerator implements IdGeneratorDataSource {
  public generateId(): string {
    return v4();
  }
}
