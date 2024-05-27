


// Set Item 
// localStorage.setItem("hareket","burpee");
// localStorage.setItem("tekrar",50);

// Get item
// const value = localStorage.getItem("tekrar");
// console.log(value);
// console.log(typeof value);


// Clear Local Storage
// localStorage.clear();


// localStorage.setItem("hareket","burpee");
// localStorage.setItem("tekrar",50);

// console.log(localStorage.getItem("sport"));

// if(localStorage.getItem("hareket") == null){
//     console.log("Sorguladıgınız veri yoktur")
// }else{
//     console.log("Sorguladıgınız veri var")
// }

// Local Storage Array yazma

// const todos = ["Todo 1", "Todo 2", "Todo 3"];

// localStorage.setItem("todos",todos);

// console.log(typeof localStorage.getItem("todos"))

// localStorage.setItem("todos", JSON.stringify(todos));

// const value = JSON.parse(localStorage.getItem("todos"));
// console.log(value);

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit",addTodo);


function addTodo(e){

    const value = todoInput.value;

    let todos;

    if(localStorage.getItem("todos") == null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);

    localStorage.setItem("todos",JSON.stringify(todos));

    e.preventDefault();

}
