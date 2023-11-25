const apiMovies=$.ajax({
  url:"https://api.themoviedb.org/3/movie/now_playing?api_key=1bfa430aada4409bfa6a3c5528128e8a&page=1",
  success: (data)=>{
console.log(data);
// renderHomePage(data.results)
  },
  error: (err)=>{
    console.log(err);
  }
})
setTimeout(() => {
const apiFilm=apiMovies.responseJSON.results
  console.log(apiFilm);

const movies = [
  {
    id: 1,
    movieName: "Avatar: The Way of Water",
    actors: ["actor1", "actor2"],
    imageSrc: "./pictures/Avatar.jpg",
    trailer: `<iframe width="100%vw" height="503" src="https://www.youtube.com/embed/o5F8MOz_IDw" title="Avatar: The Way of Water | New Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    description:
      "Is a 2022 American epic science fiction film co-produced and directed by James Cameron, who co-wrote the screenplay with Rick Jaffa and Amanda Silver from a story the trio wrote with Josh Friedman and Shane Salerno. Distributed by 20th Century Studios, it is the sequel to Avatar (2009) and the second installment in the Avatar film series. Cast members Sam Worthington, Zoe Saldaña, Stephen Lang, Joel David Moore, CCH Pounder, Giovanni Ribisi, Dileep Rao and Matt Gerald reprise their roles from the original film, with Sigourney Weaver returning in an additional role,[6] while Kate Winslet joined the cast. It follows a blue-skinned humanoid Na'vi named Jake Sully (Worthington) as he and his family, under renewed human threat, seek refuge with the aquatic Metkayina clan of Pandora, a habitable exomoon on which they live.",
    rate: 8,
    liked: 0,
    type: "Science Fiction",
    year: 2022,
  },
  {
    id: 2,
    movieName: "Spider-Man: No Way Home",
    actors: ["actor1", "actor2"],
    imageSrc: "./pictures/Spider-Man.jpg",
    trailer: `<iframe width="100%vw" height="503" src="https://www.youtube.com/embed/JfVOs4VSpmA" title="SPIDER-MAN: NO WAY HOME - Official Trailer (HD)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    description:
      "Is a 2021 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Homecoming (2017) and Spider-Man: Far From Home (2019), and the 27th film in the Marvel Cinematic Universe (MCU). The film was directed by Jon Watts and written by Chris McKenna and Erik Sommers. It stars Tom Holland as Peter Parker / Spider-Man alongside Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau, Jamie Foxx, Willem Dafoe, Alfred Molina, Benedict Wong, Tony Revolori, Marisa Tomei, Andrew Garfield, and Tobey Maguire. In the film, Parker asks Dr. Stephen Strange (Cumberbatch) to use magic to make his identity as Spider-Man a secret again following its public revelation at the end of Far From Home. When the spell goes wrong because of Parker's actions, the multiverse is broken open, which allows visitors from alternate realities to enter Parker's universe.",
    liked: 0,
    rate: 8,
    type: "Superhero",
    year: 2021,
  },
  {
    id: 3,
    movieName: "Top Gun: Maverick",
    actors: ["actor1", "actor2"],
    imageSrc: "./pictures/Top_Gun.jpg",
    trailer: `<iframe width="100%vw" height="503" src="https://www.youtube.com/embed/giXco2jaZ_4" title="Top Gun: Maverick | NEW Official Trailer (2022 Movie) - Tom Cruise" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    description:
      " Is a 2022 American action drama film directed by Joseph Kosinski and written by Ehren Kruger, Eric Warren Singer, and Christopher McQuarrie from stories by Peter Craig and Justin Marks. The film is a sequel to the 1986 film Top Gun. Tom Cruise reprises his starring role as the naval aviator Maverick. It is based on the characters of the original film created by Jim Cash and Jack Epps Jr. It also stars Miles Teller, Jennifer Connelly, Jon Hamm, Glen Powell, Lewis Pullman, Ed Harris and Val Kilmer, who reprises his role as Iceman. The story involves Maverick confronting his past while training a group of younger Top Gun graduates, including the son of his deceased best friend, for a dangerous mission.",
    liked: 0,
    rate: 7,
    type: "Action Drama",
    year: 2022,
  },
  {
    id: 4,
    movieName: "Barbie",
    actors: ["actor1", "actor2"],
    imageSrc: "./pictures/Barbie.jpg",
    trailer: `<iframe width="100%vw" height="503" src="https://www.youtube.com/embed/pBk4NYhWNMM" title="Barbie | Main Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    description:
      "Is a 2023 fantasy comedy film directed by Greta Gerwig from a screenplay she wrote with Noah Baumbach. Based on the eponymous fashion dolls by Mattel, it is the first live-action Barbie film after numerous computer-animated films and specials. The film stars Margot Robbie as the title character and Ryan Gosling as Ken, and follows the pair on a journey of self-discovery following an existential crisis. The supporting cast includes America Ferrera, Kate McKinnon, Issa Rae, Rhea Perlman, and Will Ferrell.",
    liked: 0,
    rate: 7.5,
    type: "Fantasy Comedy",
    year: 2023,
  },
  {
    id: 5,
    movieName: "Doctor Strange in the Multiverse of Madness",
    actors: ["actor1", "actor2"],
    imageSrc: "./pictures/Doctor_Strange.jpg",
    trailer: `<iframe width="100%vw" height="503" src="https://www.youtube.com/embed/aWzlQ2N6qqg" title="Marvel Studios&#39; Doctor Strange in the Multiverse of Madness | Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    description:
      "Is a 2022 American superhero film based on Marvel Comics featuring the character Doctor Strange. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to Doctor Strange (2016) and the 28th film in the Marvel Cinematic Universe (MCU). The film was directed by Sam Raimi, written by Michael Waldron, and stars Benedict Cumberbatch as Stephen Strange, alongside Elizabeth Olsen, Chiwetel Ejiofor, Benedict Wong, Xochitl Gomez, Michael Stuhlbarg, and Rachel McAdams. In the film, Stephen Strange and Wong (Wong) must protect America Chavez (Gomez), a teenager capable of traveling the multiverse, from Wanda Maximoff (Olsen) who has been transformed into the evil Scarlet Witch.",
    liked: 0,
    rate: 6.8,
    type: "Superhero",
    year: 2022,
  },
  {
    id: 6,
    movieName: "The Battle at Lake Changjin",
    actors: ["actor1", "actor2"],
    imageSrc: "./pictures/The_Battle.png",
    trailer: `<iframe width="100%vw" height="503" src="https://www.youtube.com/embed/gbCUoKya2_U" title="The Battle at Lake Changjin | 2021 |  | Official Trailer | [ Chinese ]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    description:
      " Is a 2021 Chinese war film co-directed and co-produced by Chen Kaige, Tsui Hark and Dante Lam, written by Lan Xiaolong and Huang Jianxin, and starring Wu Jing and Jackson Yee.[3][4][5][6] It was commissioned by the Central Propaganda Department of the Chinese Communist Party as part of the Party's 100th anniversary celebrations.[7][8][9][10] The film depicts the story of the North Korea-allied Chinese People's Volunteer Army, forcing U.S. forces to withdraw in a fictionalized retelling of the Battle of the Chosin Reservoir during the Korean War.",
    liked: 0,
    rate: 6,
    type: "War",
    year: 2021,
  },
  {
    id: 7,
    movieName: "Guardians of the Galaxy Vol. 3",
    actors: ["actor1", "actor2"],
    imageSrc: "./pictures/Guardians.jpg",
    trailer: `<iframe width="100%vw" height="503" src="https://www.youtube.com/embed/JqcncLPi9zw" title="Marvel Studios’ Guardians of the Galaxy Vol. 3 | New Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    description:
      "Is a 2023 American superhero film based on the Marvel Comics superhero team Guardians of the Galaxy, produced by Marvel Studios, and distributed by Walt Disney Studios Motion Pictures. It is the sequel to Guardians of the Galaxy (2014) and Guardians of the Galaxy Vol. 2 (2017), and the 32nd film in the Marvel Cinematic Universe (MCU). Written and directed by James Gunn, it features an ensemble cast including Chris Pratt, Zoe Saldaña, Dave Bautista, Karen Gillan, Pom Klementieff, Vin Diesel, Bradley Cooper, Will Poulter, Sean Gunn, Chukwudi Iwuji, Linda Cardellini, Nathan Fillion, and Sylvester Stallone. In the film, the Guardians must protect Rocket (Cooper) from the High Evolutionary.",
    liked: 0,
    rate: 7,
    type: "Superhero",
    year: 2023,
  },
  {
    id: 8,
    movieName: "Too Cool to Kill",
    actors: ["actor1", "actor2"],
    imageSrc: "./pictures/Too_Cool.jpg",
    trailer: `<iframe width="100%vw" height="503" src="https://www.youtube.com/embed/GqPXFKG6qnQ" title="TOO COOL TO KILL Official Trailer | Wildly Hysterical Chinese Comedy | Starring Ma Li &amp; Wei Xiang" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    description:
      "Is a 2022 Chinese action comedy film, based on the 2008 Japanese film The Magic Hour.[2] It stars Wei Xiang as an amateur actor who is invited to play a leading role in a film and ends up drawn into a dangerous situation.[3] It was released in China on 1 February 2022 (Chinese New Year) and in the United States and Canada on 18 February 2022.[4][5][6] It is Xing Wenxiong's feature film directorial debut.",
    liked: 0,
    rate: 6.5,
    type: "Action Comedy",
    year: 2022,
  },
  {
    id: 9,
    movieName: "F9",
    actors: ["actor1", "actor2"],
    imageSrc: "./pictures/F9.jpg",
    trailer: `<iframe width="100%vw" height="503" src="https://www.youtube.com/embed/fEE4RO-_jug" title="F9 - Official Trailer 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    description:
      " Is a 2021 American action film directed by Justin Lin, who co-wrote the screenplay with Daniel Casey, based on a story by Lin, Alfredo Botello, and Casey.[8] It is the sequel to The Fate of the Furious (2017), the ninth main installment, and the tenth installment overall in the Fast & Furious franchise. It stars Vin Diesel as Dominic Toretto, alongside Michelle Rodriguez, Tyrese Gibson, Chris Ludacris Bridges, John Cena, Nathalie Emmanuel, Jordana Brewster, Sung Kang, Michael Rooker, Helen Mirren, Kurt Russell, and Charlize Theron. In the film, Toretto and the team come together to stop a world-shattering plot involving his younger brother, Jakob (Cena).",
    liked: 0,
    rate: 8,
    type: "Action",
    year: 2021,
  },
  {
    id: 10,
    movieName: "Fast X",
    actors: ["actor1", "actor2"],
    imageSrc: "./pictures/Fast_X.jpg",
    trailer: `<iframe width="100%vw" height="503" src="https://www.youtube.com/embed/eoOaKN4qCKw" title="FAST X | Final Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    description:
      " Is a 2023 American action film directed by Louis Leterrier from a screenplay written by Dan Mazeau and Justin Lin, both of whom also co-wrote the story with Zach Dean. It is the sequel to F9 (2021), the tenth main installment, and the eleventh installment overall in the Fast & Furious franchise. It stars Vin Diesel as Dominic Toretto alongside an ensemble cast including Michelle Rodriguez, Tyrese Gibson, Chris Ludacris Bridges, John Cena, Nathalie Emmanuel, Jordana Brewster, Sung Kang, Scott Eastwood, Daniela Melchior, Alan Ritchson, Helen Mirren, Brie Larson, Rita Moreno, Jason Statham, Jason Momoa, and Charlize Theron. In the film, Toretto must protect his family from Dante Reyes (Momoa), who seeks revenge for his father's death and the loss of his family's fortune.",
    liked: 0,
    rate: 7.8,
    type: "Action",
    year: 2023,
  },
];
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
      <div id="poster-img"><img class="movieImage ${ele.id}" src=${ele.poster_path}></div>
      <div class="poster-info">
      <div id="poster-name">
      <p>${ele.title}</p>
      <div id="movies-year">
      <p>${ele.relese_date}</p></div>
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
  <div id="pic"><p><img src=${ele.poster_path}>
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
    <div id="favorite-poster-img"></i><img class="movieImage ${ele.id}" src=${ele.poster_path}></div>
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

$(window).on("load", renderHomePage(movies));
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
}, 2000);