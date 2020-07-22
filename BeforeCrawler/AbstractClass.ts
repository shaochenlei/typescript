//readonly
// class Person{
//     public readonly name: string;
//     constructor(name: string){
//         this.name = name;
//     }
// }

// const person = new Person('Dell');
// console.log(person.name);

//抽象类
abstract class Geom {
    width: number;
    radius: number;
    getType() {
        return 'Gemo';
    }
    abstract getArea(): number;
}
// //抽象类只能被继承
// // new Geom(){}
// class Circle extends Geom {
//     getArea() {
//         return 123;
//     }
// }

// class Square {

// }

// class Triangle {

// }

//接口 通用性封装

interface Person {
    name: string;
}

interface Teacher extends Person {
    teachingAge: number;
}

interface Student extends Person {
    age: number;
}

//继续加类型
interface Driver {
    name: string;
    age: number;
}

const teacher = {
    name: 'Dell',
    teachingAge: 3
}

const student = {
    name: 'lee',
    age: 18
}

const getUserInfo = (user: Person) => {
    console.log(user.name);
}

getUserInfo(teacher);
getUserInfo(student);