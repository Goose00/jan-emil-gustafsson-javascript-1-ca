const options = {
	headers: {
		"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
		"x-rapidapi-key": "3cbd8fe6e8msh154d62eb58c16c4p1fe8d5jsnc9c87e469b9c"
	}
};

async function callMovieDatabase() {

	try{
		const response = await fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt0770828", options);
		
		const movies = await response.json();

		movieDetails(movies);
		console.log(movies);

	}
	catch (error) {
		console.log(error);
	}

}
callMovieDatabase();

function movieDetails(movies) {
	console.log(movies);

	const movieResults = document.querySelector(".details");

	let html ="";
//finner ikke navnet på "object", hva skal være mellom movies og .length?
	for (let i = 0; i < movies.object.length; i++) {

		if (movies[i].title) {

		}
		html += 
		
		`<div class="details">
			<h4 class="name">${movies[i].title}</h4>
			<p><b>Property:</b> ${movies[i].length}</p>
			<p><b>Property:</b> ${movies[i].year}</p>
			<a class="btn btn-primary" href="details.html?id=">Details</a>
		</div>`

		}

	movieResults.innerHTML = html;

}

movieDetails();
/*
const movieImage = document.querySelector(".image").src="https://via.placeholder.com/300";

`<img class="image" src="${movies[i].poster}" alt="${movies[i].title}" />`

movieImage.innerHTML = html;
*/
/*
async function callMovieDatabase() {

	const movieImage = document.querySelector(".image").src="https://via.placeholder.com/300";

	const movieName = document.querySelector(".name");

	const movieRuntime = document.querySelector(".runtime");

	const releaseYear = document.querySelector(".year");

	try{
		const response = await fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt0770828", options);
		
		const movies = await response.json();

		movieDetails(movies);
		console.log(movies);

		movieImage.innerHTML = movies.poster;

		movieName.innerHTML = movies.title;

		movieRuntime.innerHTML = movies.length;

		releaseYear.innerHTML = movies.year;



		
	}
	catch (error) {
		console.log(error);
	}

}
callMovieDatabase();

function movieDetails(movies) {
	
}
*/