import Player from '@vimeo/player'
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
console.log(iframe)

function onPlay(event) {
    console.log(event.seconds);
    let currentTime = event.seconds;
    console.log(currentTime);
    localStorage.setItem("videoplayer-current-time", currentTime);
    
};

player.on('timeupdate', onPlay);