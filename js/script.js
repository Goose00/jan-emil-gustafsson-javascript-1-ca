const options = {
	"headers": {
		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
		"x-rapidapi-key": "3cbd8fe6e8msh154d62eb58c16c4p1fe8d5jsnc9c87e469b9c"
	}
};

async function callMovieDatabase() {

	const movieImage = document.getElementsByClassName("image").src=" ";

	const movieName = document.querySelector(".name");

	const movieRuntime = document.querySelector(".runtime");

	const releaseYear = document.querySelector(".year");

	try{
		const response = await fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?i=tt0770828&type=movie", options);
		
		const movies = await response.json();

		movieDetails(movies);
		console.log(movies);

		movieImage.innerHTML = movies.Poster;

		movieName.innerHTML = movies.Title;

		movieRuntime.innerHTML = movies.Runtime;

		releaseYear.innerHTML = movies.Released;
		

	}
	catch (error) {
		console.log(error);
	}

}
callMovieDatabase();

function movieDetails(movies) {
	
}

/* I tried my best, but got really stuck and couldnt get
my head wrapped around this. Would really appreciate exapmples
of this and how to get the correct information from the api 
because everytime i tried calling it i ended up with an array
like this:
Object
Actors: "Henry Cavill, Amy Adams, Michael Shannon, Diane Lane"
Awards: "7 wins & 46 nominations."
BoxOffice: "N/A"
Country: "USA, UK"
DVD: "N/A"
Director: "Zack Snyder"
Genre: "Action, Adventure, Sci-Fi"
Language: "English"
Metascore: "55"
Plot: "An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened, when survivors of his home planet invade Earth."
Poster: "https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_SX300.jpg"
Production: "N/A"
Rated: "PG-13"
Ratings: (3) [{…}, {…}, {…}]
Released: "14 Jun 2013"
Response: "True"
Runtime: "143 min"
Title: "Man of Steel"
Type: "movie"
Website: "N/A"
Writer: "David S. Goyer (screenplay), David S. Goyer (story), Christopher Nolan (story), Jerry Siegel (Superman created by), Joe Shuster (Superman created by)"
Year: "2013"
imdbID: "tt0770828"
imdbRating: "7.0"
imdbVotes: "671,513"
__proto__: Object

or this:
script.js:24 
{Title: "Man of Steel", Year: "2013", Rated: "PG-13", Released: "14 Jun 2013", Runtime: "143 min", …}
Actors: "Henry Cavill, Amy Adams, Michael Shannon, Diane Lane"
Awards: "7 wins & 46 nominations."
BoxOffice: "N/A"
Country: "USA, UK"
DVD: "N/A"
Director: "Zack Snyder"
Genre: "Action, Adventure, Sci-Fi"
Language: "English"
Metascore: "55"
Plot: "An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened, when survivors of his home planet invade Earth."
Poster: "https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_SX300.jpg"
Production: "N/A"
Rated: "PG-13"
Ratings: (3) [{…}, {…}, {…}]
Released: "14 Jun 2013"
Response: "True"
Runtime: "143 min"
Title: "Man of Steel"
Type: "movie"
Website: "N/A"
Writer: "David S. Goyer (screenplay), David S. Goyer (story), Christopher Nolan (story), Jerry Siegel (Superman created by), Joe Shuster (Superman created by)"
Year: "2013"
imdbID: "tt0770828"
imdbRating: "7.0"
imdbVotes: "671,513"
__proto__: Object

And no "results" or an array to loop trough like we have done earlier*/ 