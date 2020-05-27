    
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
 
const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')
console.log(id)

fetch(`http://localhost:3000/artists/${id}`)
    .then(response => response.json())
    .then(artist => controller(artist))

function controller(artist) {
    makeArtistTitle(artist)
    makePlayer(artist)
}

function makeArtistTitle(artist){
    const title = document.createElement('h1')

    title.innerText = `${artist.name}`

    document.body.append(title)
}



function makePlayer(artist) {
    const music_name = "https://docs.google.com/uc?export=download&id=1tEK3QtjKtw1PZfbkwwBpmcjxdYxZhQHc"
    console.log(music_name)

    const pic = document.createElement('img')
    pic.src =`${artist.image}`
    
    const listen = document.createElement('h3')
    listen.innerText ="Listen here!"

    picDiv.append(pic, listen)
    
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
