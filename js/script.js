fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt0770828", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
		"x-rapidapi-key": "3cbd8fe6e8msh154d62eb58c16c4p1fe8d5jsnc9c87e469b9c"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});