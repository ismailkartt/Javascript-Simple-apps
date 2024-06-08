    // AJAX Callback http request

    class Request{

     


        constructor(){
            this.xhr = new XMLHttpRequest();
        }

        // Get Request

        get(url,callback){

            this.xhr.open("GET",url); // Bağlantı açık
            // const temp = this;
            // console.log(this);

            // 1.yöntem
            // this.xhr.onload = function(){
            //     if(temp.xhr.status === 200){
            //         console.log(temp.xhr.responseText);
            //     }
            // }

            // 2.yöntem
            // this.xhr.onload = function(){
            //     if(this.status === 200){
            //         console.log(this.responseText); 
            //     }
            // }

            //// 3.yöntem
            // this.xhr.onload = function(){
            //     console.log(this);
            //     if(this.xhr.status === 200){
            //         console.log(this.xhr.responseText); 
            //     }
            // }.bind(this);

            // 4.yöntem
            this.xhr.onload = () => { 
                
                if(this.xhr.status === 200){
                    callback(null,this.xhr.responseText);  // İstegimiz bitti
                }else{
                    // Hata Durumu
                    callback("Herhangi bir hata oluştu",null);
                }
            };

            

            this.xhr.send();
        }

    }


    const request = new Request();

    // request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
    //     if(err === null){
    //         // Başarılı 
    //         console.log(response);
    //     }else{
    //         // Hata
    //         console.log(err);
    //     }
    // });

     request.get("https://jsonplaceholder.typicode.com/albums/51",function(err,response){
        if(err === null){
            // Başarılı 
            console.log(response);
        }else{
            // Hata
            console.log(err);
        }
    });


