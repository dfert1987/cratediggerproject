const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')
const flexBox = document.getElementById('flexbox')
const col = document.getElementById('col')
const titleDiv = document.getElementById('title')


fetch(`http://localhost:3000/countries/${id}`)
    .then(response => response.json())
    .then(response => controller(response));

fetch('http://localhost:3000/artists')
    .then(response => response.json())
    .then(json =>  getArtists(json))


function controller(country){
    showCountry(country)
}

function showCountry(country) {
    const header = document.createElement('h1')
    console.log(country)

    header.innerText = `Welcome to ${country.name}`

    header.style.textAlign = 'center'
    header.style.fontFamily = 'Oferta do Dia'
    header.style.fontSize = '50px'


    titleDiv.append(header)
}


function getArtists(artists){
    console.log(artists)
    artists.forEach(artist => {
        if (artist.country_id == id) {
        const artistCard = document.createElement('div')
        artistCard.className = 'card'
        const content = document.createElement('div')
        content.className = 'content'
        const image = document.createElement('div');
        image.className = 'image'
        const artistName = document.createElement('h2');
        const genre = document.createElement('h3');
        const button = document.createElement('button');
        const similarArtist = artist.famous_artist_id

        fetch("http://localhost:3000/famous_artists")
        .then(response => response.json())
        .then(response => matchFamous(response));

        function matchFamous(response){
            response.forEach(famousArtist => {
            if (similarArtist == famousArtist.id) {
                
                const showSimilarArtist = document.createElement('h3');
                showSimilarArtist.innerText=`Similar to: ${famousArtist.name}`
                content.append(showSimilarArtist)
            }
            })
        }
        image.innerHTML= `<img src="${artist.image}">`
        console.log(image)
        button.innerHTML=`<a href="showartist.html?id=${artist.id}">Artist Page</a>`

        artistName.innerText=`${artist.name}`
        genre.innerText=`Genre: ${artist.genre}`
        

        content.append( artistName, genre, button)
        artistCard.append(image, content)
        col.append(artistCard)
        }
    })
}