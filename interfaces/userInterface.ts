interface IAdress{
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string;
        lng: string}
}
interface IUser{
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAdress
}

export {IUser,IAdress}