export interface IUser {
    id: number
    name: string
    username: string
    email: string
    adress: IAdress
  }

  export interface IAdress {
    street: string
    city: string
    zipcode: string
  }