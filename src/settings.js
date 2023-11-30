import { init, preferences, setPreferences } from ".";
import { data } from "./lang";
import getText from "./lang";


export default function createSettings(){

    const main = document.querySelector('.main');

    const settings = document.createElement('dialog');
    settings.id = 'settings';

    const settingsTitle = document.createElement('h2');
    settingsTitle.classList.add('settings-title');

    const languageWrapper = document.createElement('div');
    languageWrapper.classList.add('config-wrapper');

    const languageLabel = document.createElement('label');
    languageLabel.htmlFor = 'languageSelection';
    languageLabel.textContent = getText('configLanguage');

    const languageSelect = document.createElement('select');
    languageSelect.id = 'languageSelection';
    languageLabel.classList.add('config-select');


    for (const lang in data){
        const option = document.createElement('option');
        option.value = lang;
        option.textContent = lang;

        if (preferences.language === lang) option.selected = true;

        languageSelect.appendChild(option);
    }

    languageWrapper.appendChild(languageLabel);
    languageWrapper.appendChild(languageSelect);
    
    const themeWrapper = document.createElement('div');
    themeWrapper.classList.add('config-wrapper');

    const themeLabel = document.createElement('label');
    themeLabel.htmlFor = 'themeCheckbox';
    themeLabel.textContent = getText('configTheme');

    const themeCheckbox = document.createElement('input');
    themeCheckbox.id = 'themeCheckbox';
    themeCheckbox.type = 'checkbox';
    themeCheckbox.checked = preferences.darkTheme;

    themeWrapper.appendChild(themeLabel);
    themeWrapper.appendChild(themeCheckbox);

    const volumeWrapper = document.createElement('div');
    volumeWrapper.classList.add('config-wrapper');

    const volumeLabel = document.createElement('label');
    volumeLabel.htmlFor = 'volumeRange';
    volumeLabel.textContent = getText('configSfx');

    const volumeInput = document.createElement('input');
    volumeInput.type = 'range';
    volumeInput.min = '0';
    volumeInput.max = '100';
    volumeInput.value = preferences.volume;
    volumeInput.setAttribute('list', 'volumeList');

    const volumeList = document.createElement('datalist');
    volumeList.id = 'volumeList';

    for (let i = 0; i <= 100; i += 25){
        const listOption = document.createElement('option');
        listOption.value = i.toString();
        listOption.label = i.toString();

        volumeList.appendChild(listOption);
    }

    volumeWrapper.appendChild(volumeLabel);
    volumeWrapper.appendChild(volumeInput);
    volumeWrapper.appendChild(volumeList);
    


    const saveBtn = document.createElement('button');
    saveBtn.classList.add('btn');
    saveBtn.textContent = getText('configSave');

    const saveIcon = document.createElement('i');
    saveIcon.classList.add('fa-solid');
    saveIcon.classList.add('fa-floppy-disk');
    saveBtn.appendChild(saveIcon);

    saveBtn.addEventListener('click', function(){
        preferences.language = languageSelect.value;
        preferences.darkTheme = themeCheckbox.checked;
        preferences.volume = volumeInput.value;

        settings.close();

        setPreferences();
        init();
        
    });

    main.appendChild(settings);
    settings.appendChild(settingsTitle);
    settings.appendChild(languageWrapper);
    settings.appendChild(themeWrapper);
    settings.appendChild(volumeWrapper);
    settings.appendChild(saveBtn);

    settings.showModal();
}