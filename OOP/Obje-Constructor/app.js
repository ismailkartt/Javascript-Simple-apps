// console.log(this); // Global Scope

// const emp1 = { // Object literal
//     name: "Mustafa",
//     age: 25,
//     showInfos:function(){
//         console.log("Bilgiler gösteriliyor")
//     }
// }   

// const emp2 = {
//     name: "Ahmet",
//     age: 25
// }

// emp1.salary = 400;
// emp1.showInfos();

// console.log(emp1);

function Employee(name,age,salary){ // Yapıcı fonksiyonu - Constructor
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.showInfos = function(){
        console.log(this.name,this.age,this.salary);
    }
}

const emp1 = new Employee("Mustafa",25,3000);
const emp2 = new Employee("Ahmet",25,5000);

// console.log(emp1);
// console.log(emp2);

emp1.showInfos();
emp2.showInfos();