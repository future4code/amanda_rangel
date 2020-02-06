export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private dateOfBirth: Date,
    private picture: string,
    private password: string
  ) {}

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string{
    return this.email;
  }

  public getDateOfBirth(): Date {
    return this.dateOfBirth;
  }

  public getPicture(): string{
    return this.picture;
  }

  public getPassword(): string {
    return this.password;
  }

}