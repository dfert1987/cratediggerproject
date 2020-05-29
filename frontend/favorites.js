fetch(`http://localhost:3000/artists/`)
    .then(response => response.json())
    .then(artists => parse(artists))

function parse(artists) {
    artists.forEach(artist => {
        if (artist.favorited == true) {
            createArtistCard(artist)
        }
})
}

function createArtistCard(artist) {
    const artistDiv = document.createElement('container')
    const artistName = document.createElement('h3')
    const artistImage = document.createElement('div')


    artistName.innerHTML= `<a href=http://localhost:3001/showartist.html?id=${artist.id}>${artist.name}</a> `
    
    artistImage.innerHTML = `<img src="${artist.image}"/>`

    artistDiv.append(artistName, artistImage)
    document.body.append(artistDiv)

}