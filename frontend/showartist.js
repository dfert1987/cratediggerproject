const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')
console.log(id)
   
   const play_btn = document.querySelector("#play");
    const prev_btn = document.querySelector("#pre");
    const next_btn = document.querySelector("#next");
    const range = document.querySelector("#range");
    const play_img = document.querySelector("#play_img")
   
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
    fetchApi(artist)
}

function makeArtistTitle(artist){
    const title = document.createElement('h1')

    title.innerText = `${artist.name}`

    document.body.append(title)
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

function fetchApi(artist){
    fetch(`https://api.discogs.com/artists/${artist.discogs_id}/releases`)
    .then(response => response.json())
    .then(artist => showAlbums(artist))
}

function showAlbums(artist){
console.log(artist)
}