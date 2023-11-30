import { preferences } from ".";

const data = {
    'PT-BR': {
        'title': 'Adivinhe O Número',
        'menuMessage': 'Escolha um modo de jogo',
        'shortModeButton': 'Curto',
        'mediumModeButton': 'Médio',
        'longModeButton': 'Longo',
        'shortModeMessage': 'Número de 0 à 100',
        'mediumModeMessage': 'Número de 0 à 250',
        'longModeMessage': 'Número de 0 à 500',
        'configButton': 'Configurações',
        'playButton': 'Jogar',
        'footer': 'Criado por: AllyssonOFA',
        'configTitle': 'Configurações',
        'configLanguage': 'Linguagem',
        'configTheme': 'Modo Escuro',
        'configSfx': 'SFX',
        'configSave': 'Salvar',
        'gameTitle': 'Consegue Adivinhar O Número X?',
        'guessIsLower': 'X é maior que isso.',
        'guessIsHigher':'X é menor que isso.',
        'gameGuessButton': 'Adivinhar',
        'gameTries': 'Tentativas: ',
        'winScreenTitle': 'Você Conseguiu!',
        'winScreenMessage': 'Você adivinhou o número em x tentativas!',
        'winScreenMenuButton': 'Voltar Ao Menu'
    },
    'EN': {
        'title': 'Guess The Number',
        'menuMessage': 'Select a game mode',
        'shortModeButton': 'Short',
        'mediumModeButton': 'Medium',
        'longModeButton': 'Long',
        'shortModeMessage': 'Number from 0 to 100',
        'mediumModeMessage': 'Number from 0 to 250',
        'longModeMessage': 'Number from 0 to 500',
        'configButton': 'Settings',
        'playButton': 'Play',
        'footer': 'Created by: AllyssonOFA',
        'configTitle': 'Settings',
        'configLanguage': 'Language',
        'configTheme': 'Dark Mode',
        'configSfx': 'SFX',
        'configSave': 'Save',
        'gameTitle': 'Can You Guess The Number X?',
        'guessIsLower': 'X is higher than that.',
        'guessIsHigher':'X is lower than that.',
        'gameGuessButton': 'Guess',
        'gameTries': 'Tries: ',
        'winScreenTitle': 'You Got It!',
        'winScreenMessage': 'You guessed the number in x tries!',
        'winScreenMenuButton': 'Return To Menu'
    }
};

export default function getText(text){
    return `${data[preferences.language][text]}`;
}

export {data}
