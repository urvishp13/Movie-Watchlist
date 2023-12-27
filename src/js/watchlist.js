// get the container to store the movies added to the Watchlist
const watchlist = document.getElementById("watchlist")
// const defaultText = document.querySelector(".watchlist > .default-text")

// get the movie to add to the Watchlist from local storage
const movies = localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : ''

if (movies) { // if there is a movie to be added to the Watchlist
    watchlist.style.display = "block" // restructure the way the movies are displayed on the page
}

watchlist.innerHTML = movies.reverse().join("") // add all movies to the Watchlist in reverse order (meaning last-to-be-added is on the top)