import {preferences} from '.';

export default function playAudio(file_name){
    const audio = new Audio(`./sfx/${file_name}.wav`);
    audio.volume = +preferences.volume / 100;
    audio.play();
};