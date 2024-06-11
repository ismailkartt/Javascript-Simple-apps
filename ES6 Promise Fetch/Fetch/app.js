function getTextFile(){ // Text Dosyası

    fetch("example.txt")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.log(err));

}

function getJsonFile(){ // Localdeki bir JSON dosyasından bir veri alma
    fetch("example.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

function getExternalAPI(){
    fetch("https://v6.exchangerate-api.com/v6/d93fd0c428466f48a6ca4341/latest/USD")
    .then(response => response.json())
    .then(data => {
        console.log(data.conversion_rates.TRY);
    })
    .catch(err => console.log(err));
}

getExternalAPI();
// getJsonFile();
// getTextFile();




