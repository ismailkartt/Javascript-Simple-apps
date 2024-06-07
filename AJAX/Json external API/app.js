document.getElementById("change").addEventListener("click",change);


function change(){

    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_auJVtvQlPCudEyAO3NCnu7ZacD1PwR2EcH6wGE7b&currencies=EUR%2CUSD%2CCAD");

    xhr.onload = function(){
        if(this.status){
            const response = JSON.parse(this.responseText);
            // console.log(response.data);

            const data = response.data.EUR;
            const amount = Number(document.getElementById("amount").value);

            document.getElementById("tl").value = amount * data;

        }
    }


    xhr.send();

}


