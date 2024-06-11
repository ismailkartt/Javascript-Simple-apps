class Request {
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    delete(url){
        return new Promise((resolve,reject)=>{
            fetch("https://jsonplaceholder.typicode.com/albums/1",{
                method : "DELETE"
            }).then(response => resolve("Veri işlemi başarılı"))
            .catch(err => reject(err))
        });
    }

}

const request = new Request();
// request.put("https://jsonplaceholder.typicode.com/albums/1", { userId: 10, title: "Tarkan Karma" })
//     .then(data => console.log(data))
//     .catch(err => console.error(err));

request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(message => console.log(message))
.catch(err => console.log(err));

