// // const test=(name:string):number|string[] =>{
// //     return [name]
// // }
// // // console.log(test('Max'));
// //
// // interface IUser<D,D1> {
// //     name:string;
// //     surname:string;
// //     age:number;
// //     status:boolean;
// //     data:D;
// //     data1:D1;
// // }
// // const user:IUser<number,string[]>={
// //     name:'Max',
// //     surname:'Popov',age:18,status:true,data:2,data1:['aas','as']};
// //
// // //класи
// //
// // class User{constructor(private name: string, private age: number){}};
// //
// // //поліморфізм
// //
// // interface Ishape {
// //     area:()=>number;
// //     perimeter:()=>number;
// // }
// // class Rectangle implements Ishape{
// //     constructor(private a:number,private b:number) {
// //     }
// //     area(): number {
// //         return this.a*this.b;
// //     }
// //
// //     perimeter(): number {
// //         return this.a*2+this.b*2;
// //     }
// // }
// // const rectangle=new Rectangle(1,2);
// // // console.log(rectangle.area());--->2
// // // console.log(rectangle.perimeter());--->6
// //
// //
// // //створимо ще клас трикутника
// //
// // class Triangle implements Ishape{
// //     constructor(private a:number, private b:number, private c:number) {}
// //
// //     area(): number {
// //         return this.a*this.b*this.c;
// //     }
// //
// //     perimeter(): number {
// //         return this.a+this.b+this.c;
// //     }
// // }
// // const shapes:Ishape[]=[new Rectangle(1,2),new Triangle(1,2,3),new Rectangle(4,5)];
// // for (let shape of shapes) {
// //     console.log(shape.area());
// //     console.log(shape.perimeter());
// // }
// //
// const x=()=>'frt'
//
// type MyType=ReturnType<typeof x>
// const z:MyType='ghh';


import {userService} from "./services/userService";

userService.getAll().then(({data})=>{
    console.log(data[0].address.geo.lng);
})