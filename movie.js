let api = 'https://www.omdbapi.com/?apikey=d5cb3730&t='

document.addEventListener('DOMContentLoaded', () => {
    
    let movieName = document.getElementById('movieName')
    let searchButton = document.getElementById('btn')
    let title = document.getElementById('movieTitle')
    let date = document.getElementById('date')
    let runtime = document.getElementById('runtime')
    let genre = document.getElementById('genre')
    let director = document.getElementById('director')
    let writer = document.getElementById('writer')
    let actors = document.getElementById('actors')
    let description = document.getElementById('description')
    let language = document.getElementById('language')
    let awards = document.getElementById('awards')
    let country = document.getElementById('country')
    let collection = document.getElementById('collection')
    let poster = document.getElementById('poster')

    let searchMovie = () => {
        let query = api + movieName.value;
        fetch(query).then((data) => {
            return data.json()
        }).then((data) => {
            title.innerText = data.Title
            date.innerText = data.Released
            let time = Number.parseInt(data.Runtime)
            let hours = Math.floor(time / 60)
            let minutes = time % 60;
            runtime.innerText = hours + " hrs " + minutes + " min"
            genre.innerText = data.Genre
            director.innerText = data.Director
            writer.innerText = data.Writer
            actors.innerText = data.Actors
            description.innerText = data.Plot
            language.innerText = data.Language
            awards.innerText = data.Awards
            country.innerText = data.Country
            collection.innerText = data.BoxOffice
            poster.src = data.Poster
        })
        movieName.value = ""
    }
    //we have to click on button thats why we use searchbutton
    searchButton.addEventListener('click', searchMovie);

    //here we have to use enter key after writing into the text box so we have to write same event on text box
    movieName.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            searchMovie();
        }
    })
})






