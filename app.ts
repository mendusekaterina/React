import {IUser} from "./type/typeUser";

const user:IUser =  {
    name:"Max",
    age:18,
    gender: "male"
}

function sum(a:number,b:number):number{
    return a+b
}
function showSum(a,b){
    console.log(a + b);
}

function incAge(someUser:IUser, inc:number):object{
    someUser.age+=inc
    return someUser
}

console.log(sum(1, 2));
showSum(2,3)
incAge(user, 2)
console.log(user.age);