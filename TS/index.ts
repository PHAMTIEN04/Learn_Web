class Person{
    name: string;
    age: number;
    gender: boolean;

    constructor(_name: string, _age: number, _gender: boolean){
        this.name = _name;
        this.age = _age;
        this.gender = _gender;
    }
    run(){
        console.log( this.name," dang chay");
    }
    getInfo(){
        console.log(`${this.name} ${this.age} ${this.gender}`)
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getGender(){
        return this.gender ? "male":"female";
    }
}
const p = new Person("tien",19,true);
const p1 = new Person("duc",18,false);
console.log(p);
p.run();
p1.run();
console.log(p.getName(),p.getAge(),p.getGender());
console.log(p1.getName(),p1.getAge(),p1.getGender());