const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')
const url = `http://localhost:3000/artists/${id}/`
console.log(id)
   
   const play_btn = document.querySelector("#play");
    const prev_btn = document.querySelector("#pre");
    const next_btn = document.querySelector("#next");
    const range = document.querySelector("#range");
    const play_img = document.querySelector("#play_img")
    const favoriteButton = document.querySelector("#like-button")
   
    const picDiv = document.getElementById("imagePlace")

    // const playerImage = document.querySelector("#art")
    let total_time = 0;
    let currentTime = 0;
    let isPlaying = false;
    const currentSong = new Audio();


fetch(`http://localhost:3000/artists/${id}`)
    .then(response => response.json())
    .then(artist => controller(artist))

function controller(artist) {
    makeArtistTitle(artist)
    makePlayer(artist)
    linkToDiscogs(artist)
    favoriteChange(artist)
}

function makeArtistTitle(artist){
    const headerSpace = document.getElementById("header-space")
    const title = document.createElement('h1')

    title.innerText = `${artist.name}`


   headerSpace.append(title)
}



function makePlayer(artist) {
    const music_name = `${artist.song}`
    
    console.log
    console.log(music_name)

    const pic = document.createElement('img')
    pic.src =`${artist.image}`
    
    const songName = document.createElement('h3')
    songName.innerText =`${artist.title}`

    const byArtist = document.createElement('h4')
    byArtist.innerText=  `by ${artist.name}`
    

   

    picDiv.append(pic, songName, byArtist)
    
    playSong(music_name)
    
}

function playSong(music_name){
    currentSong.src = `${music_name}`

    play_btn.addEventListener('click',function(){
        if(!isPlaying){
            currentSong.play();
            isPlaying = true;
            total_time = currentSong.duration;
            range.max = total_time;
            play_img.src = "pause.png";
        }else{
            currentSong.pause();
            isPlaying = false;
            play_img.src = "play.png";
        }
       currentSong.addEventListener('ended',function(){
            currentSong.currentTime = 0
            currentSong.pause();
            isPlaying = false;
            range.value = 0;
            play_img.src = "play.png";
        })
        currentSong.addEventListener('timeupdate',function(){
            range.value = currentSong.currentTime;
        })
        range.addEventListener('change',function(){
            currentSong.currentTime = range.value;
        })
       
    })
}

function linkToDiscogs(artist){
    const buttonSpot = document.getElementById('full-discog')
    console.log(artist.discog_id)
    const discogButton = document.createElement('button')

    discogButton.innerHTML = `<a href="https://www.discogs.com/artist/${artist.discogs_id}">See full discography!</a>`
    // discogButton.style.fontSize = "20px"
    // discogButton.style.fontDecoration = "none"

    buttonSpot.append(discogButton)

}
function favoriteChange(artist) {
favoriteButton.addEventListener('click', event => {
    event.preventDefault()

    changeFavoriteButton()
    addFavorited()
    favoriteBackend(artist)
})
}

function changeFavoriteButton(){
    document.getElementById('like-button').style.color = 'grey'
    document.getElementById('like-button').innerHTML = "Favorited"
}

function addFavorited() {
    const favorited = document.createElement('h3')
    const favoritedDiv = document.getElementById('Favorited')

    favorited.innerText= 'Saved to Favorites!'

    favoritedDiv.append(favorited)
 
}

function favoriteBackend(artist) {
    if (artist.favorited == false) {
        artist.favorited = true 
    } else artist.favorited = true
    
    fetch(url, {
       method: "PUT",
       headers: {
           "Content-Type": "application/json"
       },
       body: JSON.stringify({artist})
    })
}

// function addFavorited() {
//     const document.createElement
// }



