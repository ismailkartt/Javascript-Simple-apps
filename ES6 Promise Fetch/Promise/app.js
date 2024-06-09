// function getData(data){ // Promise objesi döndüren fonksiyonumuz
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             //  resolve("Olumlu Sonuç");
//             // reject("Olumsuz Sonuç");

//             if(typeof data === "string"){
//                 // Olumlu
//                 resolve(data);
//             }else{
//                 // Olumsuz
//                 // reject("Lütfen string bir değer girin");
//                 reject(new Error("Lütfen string bir değer girin"));
//             }


//         },5000)
//     });
// }

// console.log(getData("Merhaba"));

// getData("Merhaba").then(function(response){
//     console.log(response);
// });

// getData("Merhaba").catch(function(err){
//     console.log(err);
// });

// getData("Merhaba").then(function(response){
//     console.log("Gelen Değer: " + response);
// }).catch(function(err){
//     console.log(err)
// })

// getData(24).then(function(response){
//     console.log("Gelen Değer: " + response);
// }).catch(function(err){
//     console.error(err)
// })

// getData(24)
// .then(response => console.log("Gelen Değer: " + response)
// ).catch(err => console.error(err));
    

function addTwo(number){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(typeof number === "number"){
                resolve(number+2);
            }else{  
                reject(new Error("Lütfen bir sayı girin"))
            }
        },3000)
    })
}

addTwo("Merhaba")
.then(response =>{console.log(response)
    return response + 2;
}).then(response2 =>
    console.log(response2))
.catch(err => console.error(err));
// 1 tane catch - birden çok then kullanabiliriz - Promise Chain







