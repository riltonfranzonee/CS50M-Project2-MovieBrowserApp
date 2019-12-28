const processData = movieData =>({
    title: movieData.Title,
    type: movieData.Type,
    year: movieData.Year,
    image: movieData.Poster
})

export const fetchMovies = async searchInput => {
    const results = await fetch(`http://www.omdbapi.com/?apikey=7f3a442&s=${searchInput}`)
    const {Search} = await results.json()
    return Search  
}