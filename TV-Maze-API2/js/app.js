import {searchShows} from './tv-maze.app.js'; 

let timeoutSearch = null;
const txtSearch = document.getElementById("txtSearch");
const lstTvShows = document.getElementById("lstTvShows");

txtSearch.addEventListener("input", (e) => {
    const query = e.target.value;

    if(timeoutSearch){
        clearTimeout(timeoutSearch);
    }
    
    timeoutSearch = setTimeout(()=>{
        searchShows(query,(shows)=>{
            createMovies(shows);        
        })
    },500); 
});

lstTvShows.addEventListener("click", (e) => {
    const selectedCard = e.target.closest(".card");
    const showId = selectedCard.dataset.show;
    location.href = `product-details.html?id=${showId}`;
})



const createMovies = (shows) => {
    lstTvShows.innerHTML = "";
    shows.forEach((item)=>{
        const movieCard = createMovieCard(item);
        lstTvShows.insertAdjacentHTML("afterbegin",movieCard);
    });
};

const createMovieCard = (item) => {
    const {id, image, name, genres } = item.show;
    let movieImage = "img/no-image.png";

    if(image){
        movieImage = image.medium;
    }

    return `<div class="col">
                <div class="card h-100 " style=cursor:pointer; data-show=${id}>
                    <img src="${movieImage}" class="card-img-top" alt="${name}">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">${genres.join("-")}</p>
                    </div>
                </div>
            </div>`;
};
