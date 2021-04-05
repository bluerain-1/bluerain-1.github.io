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




// apparition texte

const bigText = document.querySelector('.para1')
const newText = bigText.textContent;
const splitText = newText.split("");
bigText.textContent = "";
for(i=0; i< splitText.length; i++){
    bigText.innerHTML += "<span class='text-app'>"+ splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 15);

function onTick(){
    const span = bigText.querySelectorAll('span')[char];
    span.classList.add('ade');
    char++;
    if(char === splitText.length){
    complete();
    return;
    }
}

function complete(){''
    clearInterval(timer);
    timer = null;
}
