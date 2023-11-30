import getText from "./lang";
import createMenu from "./menu";


let preferences = {
    'language': 'PT-BR',
    'darkTheme': false,
    'volume': '50'
};

//Get stored preferences, or save them for the first time
function getPreferences(){
    if (!window.localStorage) return;

    let localItem = localStorage.getItem('preferences');
    if (localItem != null){
        preferences = JSON.parse(localItem);
    }else{
        setPreferences();
    }
}

function setPreferences(){
    localStorage.clear();
    localStorage.setItem('preferences', JSON.stringify(preferences));
}

function setTheme(){
    const root = document.querySelector('html');
    root.dataset.theme = preferences.darkTheme ? 'dark' : 'light';
}


function createMain(){
    const main = document.createElement('main');
    main.classList.add('main');
    return main;
}

function createFooter(){
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    const iconLink = document.createElement('a');
    iconLink.href = 'https://github.com/AllyssonOFA';
    const icon = document.createElement('i');
    icon.classList.add('fa-brands');
    icon.classList.add('fa-github');
    iconLink.appendChild(icon);

    footer.textContent = getText('footer');
    
    footer.appendChild(iconLink);
    return footer;
}

function createLayout(){
    const body = document.querySelector('body');
    body.innerHTML = '';
    body.appendChild(createMain());
    body.appendChild(createFooter());
}


function init(){
    getPreferences();
    setTheme();
    createLayout();
    createMenu();
}

window.addEventListener('load', init);

export {preferences, setPreferences, init};