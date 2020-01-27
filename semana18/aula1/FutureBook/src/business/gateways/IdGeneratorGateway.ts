import { v4 } from 'uuid'

export interface IdGeneratorGateway{
  generateId(): string
}
