import getText from "./lang";
import { preferences } from ".";
import createWinScreen from "./winScreen";
import playAudio from "./audio";

export default function createGameScreen(mode){
    
    const container = document.querySelector('.container');
    container.dataset.mode = 'game';
    container.innerHTML = '';

    const gameTitle = document.createElement('h2');
    gameTitle.id = 'game-title';
    gameTitle.textContent = getText('gameTitle');
    
    const gameInput = document.createElement('input');
    gameInput.id = 'game-input';
    gameInput.type = 'number';
    gameInput.placeholder = 'X';

    const guessBtn = document.createElement('button');
    guessBtn.classList.add('btn');
    guessBtn.id = 'guess-btn';
    guessBtn.textContent = getText('gameGuessButton');

    const triesText = document.createElement('p');
    triesText.classList.add('tries-text');
    triesText.textContent = getText('gameTries');

    const triesCount = document.createElement('span');
    triesCount.textContent = '0';

    triesText.appendChild(triesCount);

    container.appendChild(gameTitle);
    container.appendChild(gameInput);
    container.appendChild(guessBtn);
    container.appendChild(triesText);

    setGameRules(mode);


}

function setGameRules(mode){
    let tries = 0;

    const rules = {
        'short': 100,
        'medium': 250,
        'long': 500
    };

    const secret_number = Math.floor((Math.random() * rules[mode]) + 1);

    const guessBtn = document.querySelector('#guess-btn');
    const gameInput = document.querySelector('#game-input');

    guessBtn.addEventListener('click', function(){
        checkWin(secret_number, gameInput.value, ++tries);
    });

    document.addEventListener('keydown', function(e){
        if (e.key == 'Enter'){
            checkWin(secret_number, gameInput.value, ++tries);
        }
    });

}

function checkWin(secret_number, input, tries){
    const gameTitle = document.querySelector('#game-title');
    const triesText = document.querySelector('span');

    if (!input) return;

    if (input != secret_number){
        gameTitle.textContent = input < secret_number ? getText('guessIsLower') : getText('guessIsHigher');
        triesText.textContent = tries.toString();
        playAudio('fail');
    } else if (input == secret_number){
        createWinScreen(tries);
    }
}