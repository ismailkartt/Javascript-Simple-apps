class Request{

    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    put(url,data,callback){
        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-type","application/json"); // JSON verisi

        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                // Başarılı
                callback(null,this.xhr.responseText);
            }else{
                callback("Put Request: Bir hata oluştu",null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }




}

const request = new Request();

request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:143,title:"Tarkan Karma"},function(err,album){
    if(err === null){
        console.log(album)
    }else{
        // hata
        console.log(err)
    }
})



