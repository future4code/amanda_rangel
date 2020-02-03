export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private dateOfBirth: string,
    private picture: string,
    private password: string
  ) {}

  public getId() {
   return this.id;
  }

  public getName() {
   return this.name;
  }

  public getEmail() {
   return this.email;
  }

  public getDateOfBirth() {
   return this.dateOfBirth;
  }

  public getPicture() {
   return this.picture;
  }

  public getPassword() {
    return this.password;
  }

}