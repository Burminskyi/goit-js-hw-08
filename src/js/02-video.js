import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(e => {
    localStorage.setItem('videoplayer-current-time', e.seconds);
  }, 1000)
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
