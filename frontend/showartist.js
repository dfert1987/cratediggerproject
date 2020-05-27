const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')
console.log(id)

fetch(`http://localhost:3000/artists/${id}`)
    .then(response => response.json())
    .then(artist => controller(artist))

function controller(artist) {
    makeArtistTitle(artist)
    makeArtistMusicPlayer(artist)
}

function makeArtistTitle(artist){
    const title = document.createElement('h1')

    title.innerText = `${artist.name}`

    document.body.append(title)
}

function makeArtistMusicPlayer(artist) {
    const playerContainerPlaying = document.createElement('div')
    playerContainerPlaying.innerHTML = '<div class="container-playing"></div>'

    const player = document.createElement('div')
    player.innerHTML = '<div class="player"></div>'

    const playerContentContainer = document.createElement('div')
    playerContentContainer.innerHTML = '<div class="player-content-container"></div>'

    const artistName = document.createElement('h2')
    artistName.innerHTML ='<h2 class="artist-name"></h2>'
    artistName.innerText = `${artist.name}`

    const songTitle = document.createElement('h3')
    songTitle.innerHTML ='<h3 class="song-title"></h3>'
    songTitle.innerText = `${artist.title}`


    playerContentContainer.append(artistName, songTitle)
    player.append(playerContentContainer)
    playerContainerPlaying.append(player)
    document.body.append(playerContainerPlaying)
}
