//interface 和 type 相类似，但并不完全一致
interface Person{
    // readonly name: string;
    name: string;
    age?:number;
    [propName: string]: any,
    say();
}
//一个接口可以继承另一个接口
interface Teacher extends Person{
    teach(): string
}

interface SayHi{
    (word: string): string
}

const getPersonName = (person: Person): void =>{
    console.log(person.name);
}
const setPersonName = (person: Teacher,name: string): void =>{
    person.name = name;
};
const person = {
    name: 'dell',
    sex: 'male',
    say(){
        return 'say hello';
    },
    teach(){
        return 'teach';
    }
};

getPersonName(person)
getPersonName(person);
setPersonName(person,'lee');
//类想用接口
class User implements Person {
    [propName: string]: any;
    age?: number | undefined;
    getName(): string {
        throw new Error("Method not implemented.");
    }
    name = 'dell';
    say(){
        return 'hello';
    }
}
// SayHi约束
const say: SayHi = (word: string) => {
    return word;
}