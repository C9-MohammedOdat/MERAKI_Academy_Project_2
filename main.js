const genres=$.ajax({
  url:"https://api.themoviedb.org/3/genre/movie/list?api_key=1bfa430aada4409bfa6a3c5528128e8a&page=1",
  success:(data)=>{
   const genersObject=  data.genres.reduce((acc,ele,i)=>{
     acc[ele.id]=ele.name
     return acc
    },{})
  },
  error:(err)=>{

  },
})
$.ajax({
  url:"https://api.themoviedb.org/3/movie/now_playing?api_key=1bfa430aada4409bfa6a3c5528128e8a&page=1",
  success: (data)=>{
const apiFilm =  data.results
const favorite = JSON.parse(localStorage.getItem("favorite")) || [];
const moviesList = $(".movies");
const images = $(".images");
const favoriteMovies = $(".favorite-movies");
const goToFavorite = $("#favorite");
const goToHome = $("#home");
const homePage = $(".home-page");
const favoritePage = $(".favorite-page");
const descriptionPage = $(".description-page");
const aboutMovie = $(".about-movie");
const body = $("body");
const searchPage = $(".search-page");
const searchBar = $("#search-bar");
const searchBtn = $("#search-btn");
const renderHomePage = (movies) => {
  moviesList.html("")
  apiFilm.forEach((ele, i) => {
    const movie = $(`<div class="poster">
      <div id="poster-img"><img class="movieImage ${ele.id}" src=${ "https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + ele.poster_path}></div>
      <div class="poster-info">
      <div id="poster-name">
      <p>${ele.title}</p>
      <div id="movies-year">
      <p>${ele.release_date}</p></div>
      <div><p>${ele.genre_ids["0"]} Film</p></div>
      </div>
      <div id="add-to-favorite" class="test" title="Add to favorite" ><svg class="add ${ele.id}"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
      <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/>
    </svg></div>
      </div>
      </div>`);

    moviesList.append(movie);
    const movieImage = $(".movieImage");
    movieImage.on("click", function (e) {
      const findObject = apiFilm.find(({ id }) => id == this.classList[1]);
      renderDescriptionPage(findObject);
    });
    const add = $(`.add`);
    add.on("click", function (e) {
      const favMovie = apiFilm.find(({ id }) => id == this.classList[1]);
      if (!favorite.includes(favMovie)) {
        favorite.push(favMovie);
        let toString = JSON.stringify(favorite);
        localStorage.setItem("favorite", toString);
      }
    });
  });
};

const renderDescriptionPage = (ele) => {
  const moviePic = $(`<div><h1>${ele.title}</h1></div>
  <div>${ele.video}</div>
  <div><h1 style="border-bottom:2px solid white">About ${ele.title} :</h1></div>
  <div id="pic"><p><img src=${"https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + ele.poster_path}>
${ele.overview}</div>`);
  aboutMovie.html("");
  aboutMovie.append(moviePic);
  homePage.hide();
  favoritePage.hide();
  descriptionPage.show();
};
const rendierFavorite = () => {
  favoriteMovies.html("");
  favorite.forEach((ele, i) => {
    console.log(ele);
    const listOfFavorite = $(`<div class="favorite-poster">
    <div id="favorite-poster-img"></i><img class="movieImage ${ele.id}" src=${ "https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + ele.poster_path}></div>
    <div class="favorite-poster-info">
    <div id="favorite-poster-name">
    <p>${ele.title}</p>
    <div id="movies-year">
    <p>${ele.release_date}</p></div>
      <div><p>${ele.genre_ids["0"]} Film</p></div>
      </div>
    <div id="remove-from-favorite" title="Remove From Favorite"><svg class="remove ${ele.id}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
  </svg></div>
    </div>
    </div>`);
    favoriteMovies.append(listOfFavorite);
    favoritePage.append(favoriteMovies);
    const remove = $(".remove");
    remove.on("click", function (e) {
      favorite.splice(i, 1);
      let toString = JSON.stringify(favorite);
      localStorage.setItem("favorite", toString);
      rendierFavorite();
      descriptionPage.hide();
    });
  });
  const movieImage = $(".movieImage");
  movieImage.on("click", (e) => {
    const findObject = favorite.find(({ id }) => id == e.target.classList[1]);

    renderDescriptionPage(findObject);
  });
};

$(window).on("load", renderHomePage(apiFilm));
searchBtn.on("click", () => {
  const filterMovies=apiFilm.filter((ele,i)=>{
    return ( ele.title.toLowerCase().includes(searchBar.val().toLowerCase()))
  })
  if(filterMovies.length != 0){
  renderHomePage(filterMovies)
    searchBar.val("");}
    else {
      const noResult=$(`<div><h3>No Result</h3></div>`)
      searchPage.append(noResult);
      homePage.hide()
      favoritePage.hide()
      descriptionPage.hide()
    searchBar.val("");
    searchPage.show()
    }
});
goToHome.on("click", () => {
  moviesList.html("")
  descriptionPage.hide();
  favoritePage.hide();
  homePage.show();
  renderHomePage(apiFilm)
});

goToFavorite.on("click", () => {
  homePage.hide();
  descriptionPage.hide();
  favoritePage.html("");
  favoritePage.show();

  rendierFavorite();
});
  },
  error: (err)=>{
    console.log(err);
  }
})