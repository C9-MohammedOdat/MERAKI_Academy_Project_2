
const render=(y)=>{
  $.ajax({
  url: `https://api.themoviedb.org/3/movie/now_playing?api_key=1bfa430aada4409bfa6a3c5528128e8a&page=${y}`,
  success: (data) => {
    $.ajax({
      url: "https://api.themoviedb.org/3/genre/movie/list?api_key=1bfa430aada4409bfa6a3c5528128e8a&page=1",
      success: (data_1) => {
        render_1(data, data_1);
      },
      error: (err) => {},
    });
  },
  error: (err) => {
    console.log(err);
  },
});
const render_1 = (data, data_1) => {
  const apiGenres = data_1.genres.reduce((acc, ele, i) => {
    acc[ele.id] = ele.name;
    return acc;
  }, {});
 const users= JSON.parse(localStorage.getItem("users")) || [];
  const apiFilm = data.results;
  const favorite = JSON.parse(localStorage.getItem("favorite")) || [];
  const moviesList = $(".movies");
  const images = $(".images");
  const head = $(".head");
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
  const filterSelect = $("#genres");
  const pages = $(".page-btn");
  const signInPage = $(".sign-in-page");
  const registerPage = $(".register-page");
  const goToRegister = $("#register");
  const goToSignIn = $("#sign-in");
  const goFromRegisterToHome = $("#go-from-register-to-home");
  const goFromSignInToHome = $("#go-to-home");
  const goFromRegisterToSignIn = $("#go-to-sign-in");
  const goFromSignInToRegester = $("#go-to-register");
  const fromRegisterToSignIn = $("#to-sign-in");
  const fromSignInToRegester = $("#to-register");
  const firstName=$("#input-first-name")
  const registerEmail=$("#register-input-email")
  const registerPssword=$("#register-input-password")
  const birthday=$("#birth-day")
  const gender=$(".gender-select")
  const registerBtn=$("#register-btn")
  const signInEmail=$("#input-email")
  const signInpassword=$("#input-password")
  const signInBtn=$("#sign-in-btn")
  const renderHomePage = (movies) => {
    signInPage.hide();
    registerPage.hide();
    moviesList.html("");
    movies.forEach((ele, i) => {
      const movie = $(`<div class="poster">
          <div id="poster-img"><img class="movieImage ${ele.id}" src=${
        "https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + ele.poster_path
      }></div>
          <div class="poster-info">
          <div id="poster-name">
          <p>${ele.title}</p>
          <div id="movies-year">
          <p>${ele.release_date}</p></div>
          <div><p>${apiGenres[ele.genre_ids["0"]]} Film</p></div>
          </div>
          <div id="add-to-favorite" class="test" title="Add to favorite" ><svg class="add ${
            ele.id
          }"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
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
    const all = $(`<option>All</option>`);
    filterSelect.append(all);
    data_1.genres.forEach((ele, i) => {
      const genresOptions = $(`<option>${ele.name}</option>`);
      filterSelect.append(genresOptions);
    });
    for (let i = 1; i < 11; i++) {
      const pageBtn = $(`<button>${i}</button>`);
      pages.append(pageBtn);
      pageBtn.on("click",()=>{
        pages.html("")
        render(i)
      })
    }
    //  left.on("click",()=>{
    // if(i===1){
    //   moviesList.html("")
    // pages.html("")
    // renderHomePage(apiFilm)
    // }
    // else{
    // i=i-5
    // console.log(i);
    // moviesList.html("")
    // pages.html("")
    // renderHomePage(apiFilm)

    // }
    //  })
    // right.on("click",()=>{
    // i=i+0
    // pages.html("")
    // moviesList.html("")
    // console.log(i);
    // renderHomePage(apiFilm)
    // });
  };
  filterSelect.on("change", () => {
    if (filterSelect.val() === "All") {
      filterSelect.html("");
      pages.hide()
      pages.html("");
      moviesList.html("");
      console.log(filterSelect.val());
      return renderHomePage(apiFilm);
    } else {
      const filteredFilm = apiFilm.filter((ele, i) => {
        return filterSelect.val() === apiGenres[ele.genre_ids["0"]];
      });
      console.log(filteredFilm);
      filterSelect.html("");
      pages.html("");
      pages.hide()
      moviesList.html("");
      return renderHomePage(filteredFilm);
    }
  });
  const renderDescriptionPage = (ele) => {
    const moviePic = $(`<div><h1>${ele.title}</h1></div>
      <div>${ele.video}</div>
      <div><h1 style="border-bottom:2px solid white">About ${
        ele.title
      } :</h1></div>
      <div id="pic"><p><img src=${
        "https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + ele.poster_path
      }>
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
      const listOfFavorite = $(`<div class="favorite-poster">
        <div id="favorite-poster-img"></i><img class="movieImage ${
          ele.id
        }" src=${
        "https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + ele.poster_path
      }></div>
        <div class="favorite-poster-info">
        <div id="favorite-poster-name">
        <p>${ele.title}</p>
        <div id="movies-year">
        <p>${ele.release_date}</p></div>
          <div><p>${apiGenres[ele.genre_ids["0"]]} Film</p></div>
          </div>
        <div id="remove-from-favorite" title="Remove From Favorite"><svg class="remove ${
          ele.id
        }" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
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
    const filterMovies = apiFilm.filter((ele, i) => {
      return ele.title.toLowerCase().includes(searchBar.val().toLowerCase());
    });
    if (filterMovies.length != 0) {
      renderHomePage(filterMovies);
      pages.hide()
      searchBar.val("");
    } else {
      const noResult = $(`<div><h3>No Result</h3></div>`);
      searchPage.append(noResult);
      homePage.hide();
      favoritePage.hide();
      descriptionPage.hide();
      searchBar.val("");
      searchPage.show();
      pages.hide()
    }
  });
  goToHome.on("click", () => {
    pages.html("");
    pages.show()
    moviesList.html("");
    descriptionPage.hide();
    favoritePage.hide();
    homePage.show();
    renderHomePage(apiFilm);
  });

  goToFavorite.on("click", () => {
    homePage.hide();
    descriptionPage.hide();
    favoritePage.html("");
    favoritePage.show();

    rendierFavorite();
  });
  goToRegister.on("click", () => {
    homePage.hide();
    favoritePage.hide();
    descriptionPage.hide();
    signInPage.hide();
    registerPage.show();
    head.hide();
  });
  goToSignIn.on("click", () => {
    homePage.hide();
    favoritePage.hide();
    descriptionPage.hide();
    signInPage.show();
    registerPage.hide();
    head.hide();
  });
  goFromRegisterToHome.on("click", () => {

    pages.show()

    homePage.show();
    head.show();
    registerPage.hide();
  });
  goFromSignInToHome.on("click", () => {
    pages.show()
    head.show();
    homePage.show();
    signInPage.hide();
  });
  goFromRegisterToSignIn.on("click", () => {
    hideShow();
  });
  goFromSignInToRegester.on("click", () => {
    registerPage.show();
    signInPage.hide();
  });
  fromRegisterToSignIn.on("click", () => {
    hideShow();
  });
  fromSignInToRegester.on("click", () => {
    registerPage.show();
    signInPage.hide();
  });
  registerBtn.on("click",()=>{
    if(firstName.val()==="" ||registerEmail.val()===""
    || registerPssword.val()==="" || birthday.val()=="" || gender.val()===""){
      return console.log("pls inseart all info");
    }else{
      console.log(birthday.val());
      renderRegister(users,firstName.val(),registerEmail.val(),registerPssword.val(),birthday.val(),gender.val())
   console.log(users);
    }
  })
  signInBtn.on("click",()=>{
    if(signInEmail.val()==="" || signInpassword.val()==="" ){
      console.log("pls inceart all the field");
    }else{
      renderSignIn(users,signInEmail.val(),signInpassword.val())
    }
  })
  const hideShow = (hide,show) => {
 

    registerPage.hide();
    signInPage.show();
  };

};
const renderRegister=(users,fName,e,pass,birth,gen)=>{
users.forEach((ele,i)=>{
  if(ele.email===e){
    console.log("email is excesed");
  }
})
users.push({
  firstName:fName,
  email:e,
password:pass,
birthday:birth,
gender:gen,
signedIn:false,
})
let toString = JSON.stringify(users);
          localStorage.setItem("users", toString);
}
const renderSignIn=(users,signInEmail,signInpassword)=>{
  users.forEach((ele,i)=>{
  if(ele.email===signInEmail && ele.password===signInpassword){
    users.signedIn=true;
    let toString = JSON.stringify(users);
          localStorage.setItem("users", toString);
          console.log(users.signedIn);
          // homePage.show()
          // signInPage.hide()
  }
  })
}
}
render(1);


