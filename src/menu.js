import { preferences } from ".";
import playAudio from "./audio";
import createGameScreen from "./gameScreen";
import getText from "./lang";
import createSettings from "./settings";

export default function createMenu(){
    const main = document.querySelector('.main');

    const menu = document.createElement('section');
    menu.classList.add('container');
    menu.dataset.mode = 'menu';
    
    const menuTitle = document.createElement('h1');
    menuTitle.classList.add('menu-title');
    menuTitle.textContent = getText('title');
    
    const menuMessage = document.createElement('h2');
    menuMessage.classList.add('menu-message');
    menuMessage.textContent = getText('menuMessage');;

    const shortMenuBtn = document.createElement('button');
    shortMenuBtn.value = 'short';
    shortMenuBtn.dataset.text = 'shortModeMessage';
    shortMenuBtn.classList.add('btn');
    shortMenuBtn.classList.add('menu-btn');
    shortMenuBtn.classList.add('active-btn');
    shortMenuBtn.textContent = getText('shortModeButton');

    const mediumMenuBtn = document.createElement('button');
    mediumMenuBtn.value = 'medium';
    mediumMenuBtn.dataset.text = 'mediumModeMessage';
    mediumMenuBtn.classList.add('btn');
    mediumMenuBtn.classList.add('menu-btn');
    mediumMenuBtn.textContent = getText('mediumModeButton');

    const longMenuBtn = document.createElement('button');
    longMenuBtn.value = 'long';
    longMenuBtn.dataset.text = 'longModeMessage';
    longMenuBtn.classList.add('btn');
    longMenuBtn.classList.add('menu-btn');
    longMenuBtn.textContent = getText('longModeButton');


    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    const configBtn = document.createElement('button');
    configBtn.classList.add('btn');
    configBtn.classList.add('config-btn');
    configBtn.textContent = getText('configButton');

    const configIcon = document.createElement('i');
    configIcon.classList.add('fa-solid');
    configIcon.classList.add('fa-gear');
    configBtn.appendChild(configIcon);

    const playBtn = document.createElement('button');
    playBtn.classList.add('btn');
    playBtn.classList.add('play-btn');
    playBtn.textContent = getText('playButton');
    
    const playIcon = document.createElement('i');
    playIcon.classList.add('fa-solid');
    playIcon.classList.add('fa-play');
    playBtn.appendChild(playIcon);

    wrapper.appendChild(configBtn);
    wrapper.appendChild(playBtn);

    main.appendChild(menu);
    menu.appendChild(menuTitle);
    menu.appendChild(menuMessage);
    menu.appendChild(shortMenuBtn);
    menu.appendChild(mediumMenuBtn);
    menu.appendChild(longMenuBtn);
    menu.appendChild(wrapper);

    setEvents();
};

function setEvents(){
    let mode = 'short';

    const menuMessage = document.querySelector('.menu-message');
    const btns = document.querySelectorAll('.menu-btn');
    btns.forEach(function(btn){
        btn.addEventListener('click', function(e){
            btns.forEach((btn) => {
                if(e.target.currentTarget !== btn){
                    btn.classList.remove('active-btn');
                }
            });
            e.currentTarget.classList.add('active-btn');

            mode = e.target.value;

            menuMessage.textContent = getText(e.target.dataset.text);

            playAudio('interface');

            setTimeout(()=>{
                menuMessage.textContent = getText('menuMessage');
            }, 1000);
        });
    });

    const configBtn = document.querySelector('.config-btn');

    configBtn.addEventListener('click', createSettings);

    const playBtn = document.querySelector('.play-btn');

    playBtn.addEventListener('click', function(){
        playAudio('game-start');
        createGameScreen(mode);
    });
    
}


