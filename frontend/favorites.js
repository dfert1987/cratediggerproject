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
    const artistDiv = document.createElement('div')
    const artistName = document.createElement('h3')
    const artistImage = document.createElement('div')
    const flexBox = document.getElementById('flexbox')


    artistName.innerHTML= `<a href=http://localhost:3001/showartist.html?id=${artist.id}>${artist.name}</a> `
    artistImage.innerHTML = `<img src="${artist.image}"/>`
    artistDiv.className ='container'

    artistDiv.append(artistName, artistImage)
    flexBox.append(artistDiv)

}