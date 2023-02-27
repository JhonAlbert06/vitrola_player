

let playList = [];
let songs = [];

let currentSong = null;

exports.getCurrentSong = () => {
  return currentSong;
}

exports.setSongs = (songs1) => {
  return songs = songs1;
}

exports.setPlayList = (playList1) => {
  return playList = playList1;
}

exports.getPlayList = () => {
  return playList;
}

let pause =false;

// Falta la reproducion automatica
exports.playSound = (name) => {

  let audio = new Audio(`/music/${name}.mp3`);

    if (!pause) {
        audio.play();
        pause = true;
    } else {
        audio.pause();
        pause = false;
    }

    console.log(audio)
};

exports.setCurrentSong = async () => {
  
  if (playList.length === 0) {

    let randomIndex = Math.floor(Math.random() * songs.length + 1) + 0;
    currentSong = songs[randomIndex];
    console.log(randomIndex);
    console.log(currentSong);

    
  } else {
    currentSong = playList[0];   
    
    /* try {
      await axios.delete("http://127.0.0.1:8000/Songs/List", {
        name: currentSong.name,
        genre: currentSong.genre,
        length: currentSong.length,
        artist: currentSong.artist,
        image: "String",
        music: "String"
      }); // Poner en variable de entorno
      
  } catch (error) {
      
  } */
  }
};