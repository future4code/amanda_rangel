import { Place } from "./place";

export class Trade extends Place {
  constructor(
    public businessName: string,
    // Refere-se ao nome da indústria

    public cnpj: string,
    // Refere-se ao número de registro da empresa

    cep: string
  ) {
    super(cep);
  }
}
