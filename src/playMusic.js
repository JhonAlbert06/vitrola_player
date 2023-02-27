let playList = [];
let songs = [];

let currentSong = null;

let pause = false;
let audio = null;

fetch('http://127.0.0.1:8000/Songs/List')
  .then(response => response.json())
  .then(data => {
    playList = data;
  })
  .catch(error => console.error(error));

fetch('http://127.0.0.1:8000/Songs')
  .then(response => response.json())
  .then(data => {
    songs = data;
  })
  .catch(error => console.error(error));


  
exports.setCurrentSong = async () => {

  if (playList.length === 0){
    currentSong = await playList[0];
    console.log(`set ${currentSong}`)

  }else{
    let randomIndex = Math.floor(Math.random() * songs.length);
    currentSong = await songs[randomIndex];

    console.log(`set ${randomIndex}`)
    // hacer llamada a la api de delete on playlist
  }

}

exports.setAudio = () => {
  audio = new Audio(`/music/${ currentSong?.name}.mp3`);
  console.log(currentSong?.name);
}

// Falta la reproducion automatica
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