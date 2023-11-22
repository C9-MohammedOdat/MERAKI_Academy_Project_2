const movies = [
  {
    id: 1,
    movieName: "Avatar: The Way of Water",
    actors: ["actor1", "actor2"],
    imageSrc: "./pictures/Avatar.jpg",
    description:
      "is a 2022 American epic science fiction film co-produced and directed by James Cameron, who co-wrote the screenplay with Rick Jaffa and Amanda Silver from a story the trio wrote with Josh Friedman and Shane Salerno. Distributed by 20th Century Studios, it is the sequel to Avatar (2009) and the second installment in the Avatar film series. Cast members Sam Worthington, Zoe Saldaña, Stephen Lang, Joel David Moore, CCH Pounder, Giovanni Ribisi, Dileep Rao and Matt Gerald reprise their roles from the original film, with Sigourney Weaver returning in an additional role,[6] while Kate Winslet joined the cast. It follows a blue-skinned humanoid Na'vi named Jake Sully (Worthington) as he and his family, under renewed human threat, seek refuge with the aquatic Metkayina clan of Pandora, a habitable exomoon on which they live",
    rate: 8,
    liked: 0,
    type: "science fiction",
    year: 2022,
  },
  {
    id: 2,
    movieName: "Spider-Man: No Way Home",
    actors: ["actor1", "actor2"],
    imageSrc: "./pictures/Spider-Man.jpg",
    description:
      "is a 2021 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Homecoming (2017) and Spider-Man: Far From Home (2019), and the 27th film in the Marvel Cinematic Universe (MCU). The film was directed by Jon Watts and written by Chris McKenna and Erik Sommers. It stars Tom Holland as Peter Parker / Spider-Man alongside Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau, Jamie Foxx, Willem Dafoe, Alfred Molina, Benedict Wong, Tony Revolori, Marisa Tomei, Andrew Garfield, and Tobey Maguire. In the film, Parker asks Dr. Stephen Strange (Cumberbatch) to use magic to make his identity as Spider-Man a secret again following its public revelation at the end of Far From Home. When the spell goes wrong because of Parker's actions, the multiverse is broken open, which allows visitors from alternate realities to enter Parker's universe",
    liked: 0,
    rate: 8,
    type: "superhero",
    year: 2021,
  },
  {
    id: 3,
    movieName: "Top Gun: Maverick",
    actors: ["actor1", "actor2"],
    imageSrc: "./pictures/Top_Gun.jpg",
    description:
      " is a 2022 American action drama film directed by Joseph Kosinski and written by Ehren Kruger, Eric Warren Singer, and Christopher McQuarrie from stories by Peter Craig and Justin Marks. The film is a sequel to the 1986 film Top Gun. Tom Cruise reprises his starring role as the naval aviator Maverick. It is based on the characters of the original film created by Jim Cash and Jack Epps Jr. It also stars Miles Teller, Jennifer Connelly, Jon Hamm, Glen Powell, Lewis Pullman, Ed Harris and Val Kilmer, who reprises his role as Iceman. The story involves Maverick confronting his past while training a group of younger Top Gun graduates, including the son of his deceased best friend, for a dangerous mission.",
    liked: 0,
    rate: 7,
    type: "action drama",
    year: 2022,
  },
  {
    id: 4,
    movieName: "Barbie",
    actors: ["actor1", "actor2"],
    imageSrc: "./pictures/Barbie.jpg",
    description:
      "is a 2023 fantasy comedy film directed by Greta Gerwig from a screenplay she wrote with Noah Baumbach. Based on the eponymous fashion dolls by Mattel, it is the first live-action Barbie film after numerous computer-animated films and specials. The film stars Margot Robbie as the title character and Ryan Gosling as Ken, and follows the pair on a journey of self-discovery following an existential crisis. The supporting cast includes America Ferrera, Kate McKinnon, Issa Rae, Rhea Perlman, and Will Ferrell.",
    liked: 0,
    rate: 7.5,
    type: "fantasy comedy",
    year: 2023,
  },
  {
    id: 5,
    movieName: "Doctor Strange in the Multiverse of Madness",
    actors: ["actor1", "actor2"],
    imageSrc: "./pictures/Doctor_Strange.jpg",
    description:
      "is a 2022 American superhero film based on Marvel Comics featuring the character Doctor Strange. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to Doctor Strange (2016) and the 28th film in the Marvel Cinematic Universe (MCU). The film was directed by Sam Raimi, written by Michael Waldron, and stars Benedict Cumberbatch as Stephen Strange, alongside Elizabeth Olsen, Chiwetel Ejiofor, Benedict Wong, Xochitl Gomez, Michael Stuhlbarg, and Rachel McAdams. In the film, Stephen Strange and Wong (Wong) must protect America Chavez (Gomez), a teenager capable of traveling the multiverse, from Wanda Maximoff (Olsen) who has been transformed into the evil Scarlet Witch.",
    liked: 0,
    rate: 6.8,
    type: "superhero",
    year: 2022,
  },
  {
    id: 6,
    movieName: "The Battle at Lake Changjin",
    actors: ["actor1", "actor2"],
    imageSrc: "./pictures/The_Battle.png",
    description:
      " is a 2021 Chinese war film co-directed and co-produced by Chen Kaige, Tsui Hark and Dante Lam, written by Lan Xiaolong and Huang Jianxin, and starring Wu Jing and Jackson Yee.[3][4][5][6] It was commissioned by the Central Propaganda Department of the Chinese Communist Party as part of the Party's 100th anniversary celebrations.[7][8][9][10] The film depicts the story of the North Korea-allied Chinese People's Volunteer Army, forcing U.S. forces to withdraw in a fictionalized retelling of the Battle of the Chosin Reservoir during the Korean War",
    liked: 0,
    rate: 6,
    type: "war",
    year: 2021,
  },
  {
    id: 7,
    movieName: "Guardians of the Galaxy Vol. 3",
    actors: ["actor1", "actor2"],
    imageSrc: "./pictures/Guardians.jpg",
    description:
      "is a 2023 American superhero film based on the Marvel Comics superhero team Guardians of the Galaxy, produced by Marvel Studios, and distributed by Walt Disney Studios Motion Pictures. It is the sequel to Guardians of the Galaxy (2014) and Guardians of the Galaxy Vol. 2 (2017), and the 32nd film in the Marvel Cinematic Universe (MCU). Written and directed by James Gunn, it features an ensemble cast including Chris Pratt, Zoe Saldaña, Dave Bautista, Karen Gillan, Pom Klementieff, Vin Diesel, Bradley Cooper, Will Poulter, Sean Gunn, Chukwudi Iwuji, Linda Cardellini, Nathan Fillion, and Sylvester Stallone. In the film, the Guardians must protect Rocket (Cooper) from the High Evolutionary",
    liked: 0,
    rate: 7,
    type: "superhero",
    year: 2023,
  },
  {
    id: 8,
    movieName: "Too Cool to Kill",
    actors: ["actor1", "actor2"],
    imageSrc: "./pictures/Too_Cool.jpg",
    description:
      "is a 2022 Chinese action comedy film, based on the 2008 Japanese film The Magic Hour.[2] It stars Wei Xiang as an amateur actor who is invited to play a leading role in a film and ends up drawn into a dangerous situation.[3] It was released in China on 1 February 2022 (Chinese New Year) and in the United States and Canada on 18 February 2022.[4][5][6] It is Xing Wenxiong's feature film directorial debut.",
    liked: 0,
    rate: 6.5,
    type: "action comedy",
    year: 2022,
  },
  {
    id: 9,
    movieName: "F9",
    actors: ["actor1", "actor2"],
    imageSrc: "./pictures/F9.jpg",
    description:
      " is a 2021 American action film directed by Justin Lin, who co-wrote the screenplay with Daniel Casey, based on a story by Lin, Alfredo Botello, and Casey.[8] It is the sequel to The Fate of the Furious (2017), the ninth main installment, and the tenth installment overall in the Fast & Furious franchise. It stars Vin Diesel as Dominic Toretto, alongside Michelle Rodriguez, Tyrese Gibson, Chris Ludacris Bridges, John Cena, Nathalie Emmanuel, Jordana Brewster, Sung Kang, Michael Rooker, Helen Mirren, Kurt Russell, and Charlize Theron. In the film, Toretto and the team come together to stop a world-shattering plot involving his younger brother, Jakob (Cena).",
    liked: 0,
    rate: 8,
    type: "action",
    year: 2021,
  },
  {
    id: 10,
    movieName: "Fast X",
    actors: ["actor1", "actor2"],
    imageSrc: "./pictures/Fast_X.jpg",
    description:
      " is a 2023 American action film directed by Louis Leterrier from a screenplay written by Dan Mazeau and Justin Lin, both of whom also co-wrote the story with Zach Dean. It is the sequel to F9 (2021), the tenth main installment, and the eleventh installment overall in the Fast & Furious franchise. It stars Vin Diesel as Dominic Toretto alongside an ensemble cast including Michelle Rodriguez, Tyrese Gibson, Chris Ludacris Bridges, John Cena, Nathalie Emmanuel, Jordana Brewster, Sung Kang, Scott Eastwood, Daniela Melchior, Alan Ritchson, Helen Mirren, Brie Larson, Rita Moreno, Jason Statham, Jason Momoa, and Charlize Theron. In the film, Toretto must protect his family from Dante Reyes (Momoa), who seeks revenge for his father's death and the loss of his family's fortune.",
    liked: 0,
    rate: 7.8,
    type: "action",
    year: 2023,
  },
];
const favorite=[];
const moviesList = $(".movies");
const images=$(".images")
const favoriteMovies=$(".favorite-movies")
const goToFavorite=$("#favorite")
const goToHome=$("#home")
const homePage=$(".home-page")
const favoritePage=$(".favorite-page")
const descriptionPage=$(".description-page")
const aboutMovie=$(".about-movie")
let i=0;
const rendier=()=>{
 
  const rendierFavorite=()=>{
    favorite.forEach((ele,i)=>{
      const listOfFavorite=$(`<div class="favorite-poster">
      <div id="favorite-poster-img"></i><img src=${ele.imageSrc}></div>
      <div class="favorite-poster-info">
      <div id="favorite-poster-name">
      <p>${ele.movieName}</p>
      <div id="movies-year">
      <p>${ele.year}</p></div>
      </div>
      <div id="remove-from-favorite"><button class="remove" id=${ele.id}>remove</button></div>
      </div>
      </div>`)
      favoriteMovies.append(listOfFavorite)
    })
  }
  rendierFavorite()
movies.forEach((ele, i) => {
  const movie = $(`<div class="poster">
    <div id="poster-img"><img src=${ele.imageSrc}></div>
    <div class="poster-info">
    <div id="poster-name">
    <p>${ele.movieName}</p>
    <div id="movies-year">
    <p>${ele.year}</p></div>
    <div><p>Type: ${ele.type}</p></div>
    </div>
    <div id="add-to-favorite"><button class="add" id=${ele.id}>Add</button></div>
    </div>
    </div>`);

  moviesList.append(movie);
  // const about=$("#poster-img")
  movie.on("click",()=>{
    const moviePic=$(`<div id="pic"><img src=${ele.imageSrc}></div>`)
    const information=$(`<div id="information"><p>${ele.description}</p></div>`)
    aboutMovie.html("")
    aboutMovie.append(moviePic)
aboutMovie.append(information)
homePage.hide()
favoritePage.hide()
descriptionPage.show()
rendier()
  })
})
;
const remove=$(".remove")
remove.on("click",(e)=>{
const delMovie=favorite.find(({id})=>id==e.target.id);
   favorite.forEach((ele,i)=>{
    if (ele===delMovie){
      favorite.splice(i,1)
    }
    rendierFavorite()

   })
    favoriteMovies.html("")
    rendierFavorite()
    favoritePage.hide()
    descriptionPage.hide()
});
const add=$(".add")
add.on("click",(e)=>{
const favMovie=movies.find(({id})=>id==e.target.id);
    if(!favorite.includes(favMovie)){
      favorite.push(favMovie)
    }
    favoriteMovies.html("")
    rendierFavorite()
    favoritePage.hide()
    descriptionPage.hide()
});
// let image=$(`<img id="mid" src=${movies[i].imageSrc}>`)

// images.append(image)
// const reImage=()=>{
// i++
// image=$(`<img id="mid" src=${movies[i].imageSrc}>`)
// rendier()
// }
// image.on("click",reImage)

  }
goToHome.on("click",()=>{
  descriptionPage.hide()
  favoritePage.hide()
  // homePage.html("")
  rendier()
  homePage.show()
})
goToFavorite.on("click",()=>{
  homePage.hide()
  descriptionPage.hide()
  favoritePage.show()
    })

rendier()