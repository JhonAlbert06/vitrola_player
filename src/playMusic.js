
exports.playSound = (name) => {
    var audio = new Audio(`music/${name}.mp3`);
    audio.play();
}