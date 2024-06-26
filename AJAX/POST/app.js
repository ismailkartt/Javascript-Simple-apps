class Request{

    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    post(url,data,callback){
        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("Content-type","application/json"); // JSON verisi

        this.xhr.onload = () => {
            if(this.xhr.status === 201){
                // Başarılı
                callback(null,this.xhr.responseText);
            }else{
                callback("Post Request: Bir hata oluştu",null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
}

const request = new Request();

request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"Thriller"},function(err,album){
    if(err === null){
        console.log(album)
    }else{
        // hata
        console.log(err)
    }
})






