//类定义重写继承super重新调用(super)
class Person {
    name = 'dell';
    getName() {
        return this.name;
    }
}

class Teacher extends Person {
    getTeacherName() {
        return 'Teacher';
    }
    getName() {
        return super.getName() + 'lee';
    }
}
const teacher = new Teacher();
console.log(teacher.getName());
console.log(teacher.getTeacherName())