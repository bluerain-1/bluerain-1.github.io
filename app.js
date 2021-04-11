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
let timer = setInterval(onTick, 1);

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

function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for( var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 50;
        if(revealTop < windowHeight){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}


window.addEventListener('scroll',reveal);