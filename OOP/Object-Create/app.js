// const obj = {
//     test1:function(){
//         console.log("Test1");
//     },
//     test2:function(){
//         console.log("Test2");
//     }
// }

// console.log(obj);

// const emp = Object.create(obj);
// emp.name = "Mustafa";
// emp.age = 25;

// console.log(emp);

function Person(){

}

Person.prototype.test1 = function(){
    console.log("Test 1");
}

Person.prototype.test2 = function(){
    console.log("Test 2");
}

const person = new Person();

console.log(person);

function Employee(name,age){
    this.name = name;
    this.age = age;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.myTest = function(){
    console.log("myTest");
}

const emp = new Employee("Mustafa",25);

console.log(emp)









