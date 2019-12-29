//search screen data

export const fetchMovies = async searchInput => {
    const results = await fetch(`http://www.omdbapi.com/?apikey=7f3a442&s=${searchInput}`)
    const allData = await results.json()
    let currentFoundMovies = allData.Search

    if(allData.totalResults > 10 && allData.totalResults < 20){
        const newPageData = await fetch(`http://www.omdbapi.com/?apikey=7f3a442&s=${searchInput}&page=2`)
        const newData = await newPageData.json()
        const updatedList = currentFoundMovies.concat(newData.Search)
        return(updatedList)
    } 
    else if(allData.totalResults >= 20 && allData.totalResults < 30) {
        let newPageData1 = await fetch(`http://www.omdbapi.com/?apikey=7f3a442&s=${searchInput}&page=2`)
        let newData1 = await newPageData1.json()
        let newPageData2 = await fetch(`http://www.omdbapi.com/?apikey=7f3a442&s=${searchInput}&page=3`)
        let newData2 = await newPageData2.json()
        let updatedList = currentFoundMovies.concat(newData1.Search, newData2.Search)
        return(updatedList)

    } else if (allData.totalResults >= 30){
        let newPageData1 = await fetch(`http://www.omdbapi.com/?apikey=7f3a442&s=${searchInput}&page=2`)
        let newData1 = await newPageData1.json()
        let newPageData2 = await fetch(`http://www.omdbapi.com/?apikey=7f3a442&s=${searchInput}&page=3`)
        let newData2 = await newPageData2.json()
        let newPageData3 = await fetch(`http://www.omdbapi.com/?apikey=7f3a442&s=${searchInput}&page=4`)
        let newData3 = await newPageData3.json()
        let updatedList = currentFoundMovies.concat(newData1.Search, newData2.Search, newData3.Search)
        return(updatedList)
    }
    else{
        return currentFoundMovies
    }
    
}

//details screen data (by id)

export const fetchDetails = async movieId => {
    const comingData = await fetch(`http://www.omdbapi.com/?apikey=7f3a442&plot=full&i=${movieId}`)
    const Detail = await comingData.json()
    return Detail
}