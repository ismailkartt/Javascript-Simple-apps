// Http Status
// 200 : OK
// 403 : Forbidden
// 505 : Internal Server Error

document.getElementById("btn").addEventListener("click",function(){

    // XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // xhr.onload = function(){
    //         console.log(this.readyState);
    // }

    // xhr.onprogress = function(){
    //     console.log("Process İşleniyor...",this.readyState);
    // }

    // xhr.onload = function(){
    //     if(this.status === 200){
    //         console.log(this.responseText);
    //     }
    // }

    xhr.onload = function(){
        if(this.status === 200){
            document.getElementById("ajax").textContent = this.responseText;
        }
    }


    // xhr.onreadystatechange = function(){

        // console.log(this.readyState);

        // console.log(this.status);

        // if(this.status == 200 && this.readyState == 4){
        //     // Response Hazır
        //     console.log(this.responseText);
        // }
    // }

    xhr.open("GET","example.txt",true);

    xhr.send();

})

