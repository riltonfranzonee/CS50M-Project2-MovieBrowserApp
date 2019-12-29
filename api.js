//search screen data

export const fetchMovies = async searchInput => {
    const results = await fetch(`http://www.omdbapi.com/?apikey=7f3a442&s=${searchInput}`)
    const {Search} = await results.json()
    return Search  
}

//details screen data (by id)

export const fetchDetails = async movieId => {
    const comingData = await fetch(`http://www.omdbapi.com/?apikey=7f3a442&plot=full&i=${movieId}`)
    const Detail = await comingData.json()
    return Detail
}