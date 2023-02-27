let playList = [];
let songs = [];

fetch('http://127.0.0.1:8000/Songs/List')
  .then(response => response.json())
  .then(data => {
    playList = data;
    console.log(playList);
  })
  .catch(error => console.error(error));

fetch('http://127.0.0.1:8000/Songs')
  .then(response => response.json())
  .then(data => {
    songs = data;
    console.log(songs);
  })
  .catch(error => console.error(error));


let currentSong = null;

exports.setCurrentSong = () => {

  if (playList.length === 0){

    let randomIndex = Math.floor(Math.random() * songs.length);
    currentSong = songs[randomIndex];

  }else{

    currentSong = playList.splice(0,1);
    // hacer llamada a la api de delete on playlist
  }

}

let pause = false;
let audio = new Audio(`/music/${currentSong}.mp3`);

exports.setAudio = ()=>{
  audio = new Audio(`/music/${currentSong}.mp3`);
}

exports.playSound = () => {
    if (!pause){
        audio.play();
        pause = true;
    }
    else{
        audio.pause();
        pause = false;
    }
};

exports.getCurrentSong = () => {
  return currentSong;
}

exports.getPlayList = () => {
  return playList;
}

exports.getSongs = () => {
  return songs;
}