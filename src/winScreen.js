import { init, preferences } from ".";
import playAudio from "./audio";
import getText from "./lang";

export default function createWinScreen(tries){
    const container = document.querySelector('.container');
    container.dataset.mode = 'win';
    container.innerHTML = '';

    playAudio('success');

    const winScreenTitle = document.createElement('h2');
    winScreenTitle.textContent = getText('winScreenTitle');

    const winScreenMessage = document.createElement('p');
    winScreenMessage.textContent = getText('winScreenMessage').replace('x', tries.toString());

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('btn');
    menuBtn.textContent = getText('winScreenMenuButton');

    const menuIcon = document.createElement('i');
    menuIcon.classList.add('fa-solid');
    menuIcon.classList.add('fa-right-from-bracket');

    container.appendChild(winScreenTitle);
    container.appendChild(winScreenMessage);
    container.appendChild(menuBtn);

    menuBtn.addEventListener('click', init);

    
}