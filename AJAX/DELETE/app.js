class Request{

    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    delete(url,callback){

        this.xhr.open("DELETE",url); // Bağlantı açık
     
        this.xhr.onload = () => { 
            
            if(this.xhr.status === 200){
                callback(null,"Veri silme işlemi başarılı");  // İstegimiz bitti
            }else{
                // Hata Durumu
                callback("Delete Request: Bir hata oluştu",null);
            }
        };

    
        this.xhr.send();
    }
}

const request = new Request();

request.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,response){
    if(err === null){
        // Başarılı 
        console.log(response);
    }else{
        // Hata
        console.log(err);
    }
});



