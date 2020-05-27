const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')


fetch(`http://localhost:3000/countries/${id}`)
    .then(response => response.json())
    .then(response => controller(response));

fetchArtists()
function fetchArtists() {
fetch('http://localhost:3000/artists')
    .then(response => response.json())
    .then(json => { 
        getArtists(json)
    })
}

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


    document.body.append(header)
}


function getArtists(artists){
    console.log(artists)
    artists.forEach(artist => {
        if (artist.country_id == id) {
        const showArtistCard = document.createElement('div');
        const image = document.createElement('div');
        const showArtist = document.createElement('h3');
        const genre = document.createElement('h4');
        const button = document.createElement('button');
        const similarArtist = artist.famous_artist_id

        fetch("http://localhost:3000/famous_artists")
        .then(response => response.json())
        .then(response => matchFamous(response));

        function matchFamous(response){
            response.forEach(famousArtist => {
            if (similarArtist == famousArtist.id) {
                
                const showSimilarArtist = document.createElement('h4');
                showSimilarArtist.innerText=`Similar to: ${famousArtist.name}`
                showArtistCard.append(showSimilarArtist, button)
            }
            })
        }

        image.innerHTML= `<img src="${artist.image}">`
        console.log(image)
        button.innerHTML=`<a href="showartist.html?id=${artist.id}">Artist Page</a>`


        showArtist.innerText=`${artist.name}`
        genre.innerText=`Genre: ${artist.genre}`
        
            
        showArtistCard.append(image, showArtist, genre)
        document.body.append(showArtistCard)
        }
    })
}