// const object = new Object(); // Object literal
// const object2 = new Object();
// object.name = "mustafa";
// console.log(object);

function Employee(name,age){
    this.name = name;
    this.age = age;
    this.showInfor = function(){
        console.log("Bilgiler gösteriliyor...")
    }
}

const emp1 = new Employee("Mustafa",25);
console.log(emp1);

console.log(emp1.toString());

