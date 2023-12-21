// get the container to store the movies added to the Watchlist
const watchlist = document.getElementById("watchlist")

// get the movie to add to the Watchlist from local storage
const movies = localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : ''
console.log(movies)
// add it to the Watchlist DOM
watchlist.innerHTML += movies.reverse().join("")



