const song1 = {
  artist: "Bon Jovi",
  genre: "Rock",
  length: "4:09",
  name: "Livin' on a Prayer"
};

const song2 = {
  artist: "Michael Jackson",
  genre: "Pop",
  length: "4:01",
  name: "Billie Jean"
};


let playList = [];
let songs = [];

playList.push(song1);
playList.push(song2);

songs.push(song1);
songs.push(song2);

/* 

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

*/

let currentSong = null;


exports.setCurrentSong = () => {

  if (playList.length === 0){

    let randomIndex = Math.floor(Math.random() * songs.length);
    currentSong = songs[randomIndex];

  }else{
    
  }

}


let pause = false;
let audio = new Audio(`/music/${currentSong}.mp3`);

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