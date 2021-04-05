const song = document.getElementById('song');
const icon = document.getElementById('icon');

icon.onclick = function(){
    if(song.paused){
        song.play();
        icon.src = "image/pause-button.png";
    }
    else{
        song.pause();
        icon.src ="image/play-button.png"

    }
}