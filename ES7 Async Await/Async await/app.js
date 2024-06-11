// async function test(data){
//     // Promise return new Promise
//     // return data;

//     let promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Bu bir değerdir")
//         },5000)
//     }) 

//     let response = await promise; // 5 saniye bekleyecek

//     // console.log(response);
//     // console.log("Naber");

//     return response;

// }

// // console.log(test("Merhaba"));

// test("Merhaba").then(response => console.log(response));


// async function testData(data){

//     let promise = new Promise((resolve,reject)=> {
//         setTimeout(()=>{
//             if(typeof data === "string"){
//                 resolve(data);
//             }else{
//                 reject(new Error("Lütfen string bir değer girin"));
//             }
//         },5000)
//     });

//     const response = await promise;

//     return response;
// }

// testData("thriller")
// .then(data => console.log(data))
// .catch(err => console.log(err));
// testData(24)
// .then(data => console.log(data))
// .catch(err => console.log(err));

async function getCurrency(url){

    const response = await fetch(url); // Response Object

    const data = await response.json(); // Json Object

    return data;

} 

getCurrency("https://v6.exchangerate-api.com/v6/d93fd0c428466f48a6ca4341/latest/USD")
.then(response => console.log(response))

