let moviedata=[{"Title":"Captain Marvel","Year":"2019","imdbID":"tt4154664","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg"},{"Title":"Ms. Marvel","Year":"2022","imdbID":"tt10857164","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BZmQ3OTZkNDUtNTU0Mi00ZjE4LTgyNTUtY2E4NWRmNDUxMzkyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"},{"Title":"Marvel One-Shot: Agent Carter","Year":"2013","imdbID":"tt3067038","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZDIwZTM4M2QtMWFhYy00N2VmLWFlMjItMzI3NjBjYTc0OTMxXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"},{"Title":"Marvel One-Shot: All Hail the King","Year":"2014","imdbID":"tt3438640","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZGFkMTZkMDQtNzM4Yy00YWEwLTkzOWEtZTMyNDRlNmJhYWJhXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"},{"Title":"Marvel One-Shot: Item 47","Year":"2012","imdbID":"tt2247732","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjNlMzAxNmQtOGEwZi00NTEyLWI0NWYtMTlhNmE2YTA3ZDVhXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"},{"Title":"Marvel One-Shot: A Funny Thing Happened on the Way to Thor's Hammer","Year":"2011","imdbID":"tt2011109","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYmVlYTg3N2QtMWM2OS00YWQyLWI2M2MtMDc0ZjBkZjk1MTY3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"},{"Title":"Marvel One-Shot: The Consultant","Year":"2011","imdbID":"tt2011118","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNGE4YjU5MDAtYzYzMC00M2RlLTk0NDgtNDU1MjgyMGI0MjI3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"},{"Title":"Marvel Studios: Legends","Year":"2021–","imdbID":"tt13650480","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BMzdiNGVlZGYtMGY1Ni00OGU1LTlmYzEtZDBjYjk3OGM3YTNkXkEyXkFqcGdeQXVyNzk3NDUzNTc@._V1_SX300.jpg"},{"Title":"Marvel Studios: Assembled","Year":"2021–","imdbID":"tt14094206","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BNWMyNWYyMmYtZjNiZi00MzFmLTg2MjYtYWEzZWY1MzBhY2I2XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"},{"Title":"Lego Marvel Super Heroes","Year":"2013","imdbID":"tt2620204","Type":"game","Poster":"https://m.media-amazon.com/images/M/MV5BOTA5ODA2NTI2M15BMl5BanBnXkFtZTgwNTcxMzU1MDE@._V1_SX300.jpg"}]
 localStorage.setItem("movielist",JSON.stringify(moviedata));

let mydata=JSON.parse(localStorage.getItem("movielist"));
console.log(mydata)
console.log(mydata[1].Title,mydata[1].Poster,mydata[0].Year);

function submited(){



}

let container=document.getElementById("container");
let card=document.createElement("div");
card.setAttribute("id","card");
let poster=document.createElement("img");
poster.src="https://m.media-amazon.com/images/M/MV5BZmQ3OTZkNDUtNTU0Mi00ZjE4LTgyNTUtY2E4NWRmNDUxMzkyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
poster.setAttribute("id","poster")
let title=document.createElement("h1");
 title.innerText="marvel movie";
 title.setAttribute("id","title")
let year=document.createElement("h2");
year.innerText="1955";
year.setAttribute("id","year")
card.append(poster,title,year)
container.append(card)
