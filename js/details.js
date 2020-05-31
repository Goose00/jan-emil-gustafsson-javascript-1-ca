
const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const movieTitleDetail = params.get("Title");

const optionsKey = fetch ("https://movie-database-imdb-alternative.p.rapidapi.com/?i=tt0770828&type=movie", options);

const url = "https://movie-database-imdb-alternative.p.rapidapi.com/?i=tt0770828&type=movie" + movieTitleDetail;

const keyEnabledUrl = optionsKey + url;

async function getMovieTitle() {
    const heading = document.querySelector("h1");

    try {
        const response = await fetch(url);
        const details = await response.json();
        console.log("details", details);

        heading.innerHTML = details.Title;
    }
    catch (error) {
        heading.innerHTML = "Error occured";
    }
}
getMovieTitle();

/* I really got stuck here, but would really appreiate example
of how to solve this */