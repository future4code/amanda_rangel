export class Order {
  constructor(
      private id: number,
      private orderDate: Date,
      private userName: string,
      private userEmail: string,
      private image: string,
      private printSize: string,
      private printPaper: string,
      private frameColor: string,
      private frameType: string,
      private frameBorder: string
  ) {}

  public getId() {
    return this.id
  }

  public getOrderDate() {
    return this.orderDate
  }

  public getUserName() {
    return this.userName
  }

  public getUserEmail() {
    return this.userEmail
  }

  public getImage() {
    return this.image
  }

  public getPrintSize() {
    return this.printSize
  }

  public getPrintPaper() {
    return this.printPaper
  }

  public getFrameColor() {
    return this.frameColor
  }

  public getFrameType() {
    return this.frameType
  }

  public getFrameBorder() {
    return this.frameBorder
  }
}


