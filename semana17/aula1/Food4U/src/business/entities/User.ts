export class User {
  constructor(
      private id: string,
      private email: string,
      private password: string
  ) {
        if(password.length < 6) {
          throw new  Error('A senha deve conter no mínimo 6 caracteres')
        }
  }

  public getId() {
    return this.id
  }

  public getEmail() {
    return this.email
  }

  public getPassword() {
    return this.password
  }
}