import Player from '@vimeo/player'
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";
console.log(iframe)


function onPlay(event) {
    console.log(event.seconds);
    let currentTime = event.seconds;
    console.log(currentTime);
    localStorage.setItem(STORAGE_KEY, currentTime);
    
};

player.on('timeupdate', throttle(onPlay, 1000));
function updateCurrentTime() {
    let currentTime = localStorage.getItem(STORAGE_KEY)
    console.log(currentTime)
    if (currentTime) {
        player.setCurrentTime(currentTime)
    } 
    
};
updateCurrentTime();