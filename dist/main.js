/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/audio.js":
/*!**********************!*\
  !*** ./src/audio.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ playAudio)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\n\nfunction playAudio(file_name){\n    const audio = new Audio(`./sfx/${file_name}.wav`);\n    audio.volume = +___WEBPACK_IMPORTED_MODULE_0__.preferences.volume / 100;\n    audio.play();\n};\n\n//# sourceURL=webpack://guessthenumber/./src/audio.js?");

/***/ }),

/***/ "./src/gameScreen.js":
/*!***************************!*\
  !*** ./src/gameScreen.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createGameScreen)\n/* harmony export */ });\n/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ \"./src/lang.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _winScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./winScreen */ \"./src/winScreen.js\");\n/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audio */ \"./src/audio.js\");\n\n\n\n\n\nfunction createGameScreen(mode){\n    \n    const container = document.querySelector('.container');\n    container.dataset.mode = 'game';\n    container.innerHTML = '';\n\n    const gameTitle = document.createElement('h2');\n    gameTitle.id = 'game-title';\n    gameTitle.textContent = (0,_lang__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('gameTitle');\n    \n    const gameInput = document.createElement('input');\n    gameInput.id = 'game-input';\n    gameInput.type = 'number';\n    gameInput.placeholder = 'X';\n\n    const guessBtn = document.createElement('button');\n    guessBtn.classList.add('btn');\n    guessBtn.id = 'guess-btn';\n    guessBtn.textContent = (0,_lang__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('gameGuessButton');\n\n    const triesText = document.createElement('p');\n    triesText.classList.add('tries-text');\n    triesText.textContent = (0,_lang__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('gameTries');\n\n    const triesCount = document.createElement('span');\n    triesCount.textContent = '0';\n\n    triesText.appendChild(triesCount);\n\n    container.appendChild(gameTitle);\n    container.appendChild(gameInput);\n    container.appendChild(guessBtn);\n    container.appendChild(triesText);\n\n    setGameRules(mode);\n\n\n}\n\nfunction setGameRules(mode){\n    let tries = 0;\n\n    const rules = {\n        'short': 100,\n        'medium': 250,\n        'long': 500\n    };\n\n    const secret_number = Math.floor((Math.random() * rules[mode]) + 1);\n\n    const guessBtn = document.querySelector('#guess-btn');\n    const gameInput = document.querySelector('#game-input');\n\n    guessBtn.addEventListener('click', function(){\n        checkWin(secret_number, gameInput.value, ++tries);\n    });\n\n    document.addEventListener('keydown', function(e){\n        if (e.key == 'Enter'){\n            checkWin(secret_number, gameInput.value, ++tries);\n        }\n    });\n\n}\n\nfunction checkWin(secret_number, input, tries){\n    const gameTitle = document.querySelector('#game-title');\n    const triesText = document.querySelector('span');\n\n    if (!input) return;\n\n    if (input != secret_number){\n        gameTitle.textContent = input < secret_number ? (0,_lang__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('guessIsLower') : (0,_lang__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('guessIsHigher');\n        triesText.textContent = tries.toString();\n        (0,_audio__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('fail');\n    } else if (input == secret_number){\n        (0,_winScreen__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(tries);\n    }\n}\n\n//# sourceURL=webpack://guessthenumber/./src/gameScreen.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   init: () => (/* binding */ init),\n/* harmony export */   preferences: () => (/* binding */ preferences),\n/* harmony export */   setPreferences: () => (/* binding */ setPreferences)\n/* harmony export */ });\n/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ \"./src/lang.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\nlet preferences = {\n    'language': 'PT-BR',\n    'darkTheme': false,\n    'volume': '50'\n};\n\n//Get stored preferences, or save them for the first time\nfunction getPreferences(){\n    if (!window.localStorage) return;\n\n    let localItem = localStorage.getItem('preferences');\n    if (localItem != null){\n        preferences = JSON.parse(localItem);\n    }else{\n        setPreferences();\n    }\n}\n\nfunction setPreferences(){\n    localStorage.clear();\n    localStorage.setItem('preferences', JSON.stringify(preferences));\n}\n\nfunction setTheme(){\n    const root = document.querySelector('html');\n    root.dataset.theme = preferences.darkTheme ? 'dark' : 'light';\n}\n\n\nfunction createMain(){\n    const main = document.createElement('main');\n    main.classList.add('main');\n    return main;\n}\n\nfunction createFooter(){\n    const footer = document.createElement('footer');\n    footer.classList.add('footer');\n    const iconLink = document.createElement('a');\n    iconLink.href = 'https://github.com/AllyssonOFA';\n    const icon = document.createElement('i');\n    icon.classList.add('fa-brands');\n    icon.classList.add('fa-github');\n    iconLink.appendChild(icon);\n\n    footer.textContent = (0,_lang__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('footer');\n    \n    footer.appendChild(iconLink);\n    return footer;\n}\n\nfunction createLayout(){\n    const body = document.querySelector('body');\n    body.innerHTML = '';\n    body.appendChild(createMain());\n    body.appendChild(createFooter());\n}\n\n\nfunction init(){\n    getPreferences();\n    setTheme();\n    createLayout();\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\nwindow.addEventListener('load', init);\n\n\n\n//# sourceURL=webpack://guessthenumber/./src/index.js?");

/***/ }),

/***/ "./src/lang.js":
/*!*********************!*\
  !*** ./src/lang.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   data: () => (/* binding */ data),\n/* harmony export */   \"default\": () => (/* binding */ getText)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\n\nconst data = {\n    'PT-BR': {\n        'title': 'Adivinhe O Número',\n        'menuMessage': 'Escolha um modo de jogo',\n        'shortModeButton': 'Curto',\n        'mediumModeButton': 'Médio',\n        'longModeButton': 'Longo',\n        'shortModeMessage': 'Número de 0 à 100',\n        'mediumModeMessage': 'Número de 0 à 250',\n        'longModeMessage': 'Número de 0 à 500',\n        'configButton': 'Configurações',\n        'playButton': 'Jogar',\n        'footer': 'Criado por: AllyssonOFA',\n        'configTitle': 'Configurações',\n        'configLanguage': 'Linguagem',\n        'configTheme': 'Modo Escuro',\n        'configSfx': 'SFX',\n        'configSave': 'Salvar',\n        'gameTitle': 'Consegue Adivinhar O Número X?',\n        'guessIsLower': 'X é maior que isso.',\n        'guessIsHigher':'X é menor que isso.',\n        'gameGuessButton': 'Adivinhar',\n        'gameTries': 'Tentativas: ',\n        'winScreenTitle': 'Você Conseguiu!',\n        'winScreenMessage': 'Você adivinhou o número em x tentativas!',\n        'winScreenMenuButton': 'Voltar Ao Menu'\n    },\n    'EN': {\n        'title': 'Guess The Number',\n        'menuMessage': 'Select a game mode',\n        'shortModeButton': 'Short',\n        'mediumModeButton': 'Medium',\n        'longModeButton': 'Long',\n        'shortModeMessage': 'Number from 0 to 100',\n        'mediumModeMessage': 'Number from 0 to 250',\n        'longModeMessage': 'Number from 0 to 500',\n        'configButton': 'Settings',\n        'playButton': 'Play',\n        'footer': 'Created by: AllyssonOFA',\n        'configTitle': 'Settings',\n        'configLanguage': 'Language',\n        'configTheme': 'Dark Mode',\n        'configSfx': 'SFX',\n        'configSave': 'Save',\n        'gameTitle': 'Can You Guess The Number X?',\n        'guessIsLower': 'X is higher than that.',\n        'guessIsHigher':'X is lower than that.',\n        'gameGuessButton': 'Guess',\n        'gameTries': 'Tries: ',\n        'winScreenTitle': 'You Got It!',\n        'winScreenMessage': 'You guessed the number in x tries!',\n        'winScreenMenuButton': 'Return To Menu'\n    }\n};\n\nfunction getText(text){\n    return `${data[___WEBPACK_IMPORTED_MODULE_0__.preferences.language][text]}`;\n}\n\n\n\n\n//# sourceURL=webpack://guessthenumber/./src/lang.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMenu)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio */ \"./src/audio.js\");\n/* harmony import */ var _gameScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameScreen */ \"./src/gameScreen.js\");\n/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lang */ \"./src/lang.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\n\n\n\n\n\n\nfunction createMenu(){\n    const main = document.querySelector('.main');\n\n    const menu = document.createElement('section');\n    menu.classList.add('container');\n    menu.dataset.mode = 'menu';\n    \n    const menuTitle = document.createElement('h1');\n    menuTitle.classList.add('menu-title');\n    menuTitle.textContent = (0,_lang__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('title');\n    \n    const menuMessage = document.createElement('h2');\n    menuMessage.classList.add('menu-message');\n    menuMessage.textContent = (0,_lang__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('menuMessage');;\n\n    const shortMenuBtn = document.createElement('button');\n    shortMenuBtn.value = 'short';\n    shortMenuBtn.dataset.text = 'shortModeMessage';\n    shortMenuBtn.classList.add('btn');\n    shortMenuBtn.classList.add('menu-btn');\n    shortMenuBtn.classList.add('active-btn');\n    shortMenuBtn.textContent = (0,_lang__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('shortModeButton');\n\n    const mediumMenuBtn = document.createElement('button');\n    mediumMenuBtn.value = 'medium';\n    mediumMenuBtn.dataset.text = 'mediumModeMessage';\n    mediumMenuBtn.classList.add('btn');\n    mediumMenuBtn.classList.add('menu-btn');\n    mediumMenuBtn.textContent = (0,_lang__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('mediumModeButton');\n\n    const longMenuBtn = document.createElement('button');\n    longMenuBtn.value = 'long';\n    longMenuBtn.dataset.text = 'longModeMessage';\n    longMenuBtn.classList.add('btn');\n    longMenuBtn.classList.add('menu-btn');\n    longMenuBtn.textContent = (0,_lang__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('longModeButton');\n\n\n    const wrapper = document.createElement('div');\n    wrapper.classList.add('wrapper');\n\n    const configBtn = document.createElement('button');\n    configBtn.classList.add('btn');\n    configBtn.classList.add('config-btn');\n    configBtn.textContent = (0,_lang__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('configButton');\n\n    const configIcon = document.createElement('i');\n    configIcon.classList.add('fa-solid');\n    configIcon.classList.add('fa-gear');\n    configBtn.appendChild(configIcon);\n\n    const playBtn = document.createElement('button');\n    playBtn.classList.add('btn');\n    playBtn.classList.add('play-btn');\n    playBtn.textContent = (0,_lang__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('playButton');\n    \n    const playIcon = document.createElement('i');\n    playIcon.classList.add('fa-solid');\n    playIcon.classList.add('fa-play');\n    playBtn.appendChild(playIcon);\n\n    wrapper.appendChild(configBtn);\n    wrapper.appendChild(playBtn);\n\n    main.appendChild(menu);\n    menu.appendChild(menuTitle);\n    menu.appendChild(menuMessage);\n    menu.appendChild(shortMenuBtn);\n    menu.appendChild(mediumMenuBtn);\n    menu.appendChild(longMenuBtn);\n    menu.appendChild(wrapper);\n\n    setEvents();\n};\n\nfunction setEvents(){\n    let mode = 'short';\n\n    const menuMessage = document.querySelector('.menu-message');\n    const btns = document.querySelectorAll('.menu-btn');\n    btns.forEach(function(btn){\n        btn.addEventListener('click', function(e){\n            btns.forEach((btn) => {\n                if(e.target.currentTarget !== btn){\n                    btn.classList.remove('active-btn');\n                }\n            });\n            e.currentTarget.classList.add('active-btn');\n\n            mode = e.target.value;\n\n            menuMessage.textContent = (0,_lang__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e.target.dataset.text);\n\n            (0,_audio__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('interface');\n\n            setTimeout(()=>{\n                menuMessage.textContent = (0,_lang__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('menuMessage');\n            }, 1000);\n        });\n    });\n\n    const configBtn = document.querySelector('.config-btn');\n\n    configBtn.addEventListener('click', _settings__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n\n    const playBtn = document.querySelector('.play-btn');\n\n    playBtn.addEventListener('click', function(){\n        (0,_audio__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('game-start');\n        (0,_gameScreen__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(mode);\n    });\n    \n}\n\n\n\n\n//# sourceURL=webpack://guessthenumber/./src/menu.js?");

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createSettings)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang */ \"./src/lang.js\");\n\n\n\n\n\nfunction createSettings(){\n\n    const main = document.querySelector('.main');\n\n    const settings = document.createElement('dialog');\n    settings.id = 'settings';\n\n    const settingsTitle = document.createElement('h2');\n    settingsTitle.classList.add('settings-title');\n\n    const languageWrapper = document.createElement('div');\n    languageWrapper.classList.add('config-wrapper');\n\n    const languageLabel = document.createElement('label');\n    languageLabel.htmlFor = 'languageSelection';\n    languageLabel.textContent = (0,_lang__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('configLanguage');\n\n    const languageSelect = document.createElement('select');\n    languageSelect.id = 'languageSelection';\n    languageLabel.classList.add('config-select');\n\n\n    for (const lang in _lang__WEBPACK_IMPORTED_MODULE_1__.data){\n        const option = document.createElement('option');\n        option.value = lang;\n        option.textContent = lang;\n\n        if (___WEBPACK_IMPORTED_MODULE_0__.preferences.language === lang) option.selected = true;\n\n        languageSelect.appendChild(option);\n    }\n\n    languageWrapper.appendChild(languageLabel);\n    languageWrapper.appendChild(languageSelect);\n    \n    const themeWrapper = document.createElement('div');\n    themeWrapper.classList.add('config-wrapper');\n\n    const themeLabel = document.createElement('label');\n    themeLabel.htmlFor = 'themeCheckbox';\n    themeLabel.textContent = (0,_lang__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('configTheme');\n\n    const themeCheckbox = document.createElement('input');\n    themeCheckbox.id = 'themeCheckbox';\n    themeCheckbox.type = 'checkbox';\n    themeCheckbox.checked = ___WEBPACK_IMPORTED_MODULE_0__.preferences.darkTheme;\n\n    themeWrapper.appendChild(themeLabel);\n    themeWrapper.appendChild(themeCheckbox);\n\n    const volumeWrapper = document.createElement('div');\n    volumeWrapper.classList.add('config-wrapper');\n\n    const volumeLabel = document.createElement('label');\n    volumeLabel.htmlFor = 'volumeRange';\n    volumeLabel.textContent = (0,_lang__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('configSfx');\n\n    const volumeInput = document.createElement('input');\n    volumeInput.type = 'range';\n    volumeInput.min = '0';\n    volumeInput.max = '100';\n    volumeInput.value = ___WEBPACK_IMPORTED_MODULE_0__.preferences.volume;\n    volumeInput.setAttribute('list', 'volumeList');\n\n    const volumeList = document.createElement('datalist');\n    volumeList.id = 'volumeList';\n\n    for (let i = 0; i <= 100; i += 25){\n        const listOption = document.createElement('option');\n        listOption.value = i.toString();\n        listOption.label = i.toString();\n\n        volumeList.appendChild(listOption);\n    }\n\n    volumeWrapper.appendChild(volumeLabel);\n    volumeWrapper.appendChild(volumeInput);\n    volumeWrapper.appendChild(volumeList);\n    \n\n\n    const saveBtn = document.createElement('button');\n    saveBtn.classList.add('btn');\n    saveBtn.textContent = (0,_lang__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('configSave');\n\n    const saveIcon = document.createElement('i');\n    saveIcon.classList.add('fa-solid');\n    saveIcon.classList.add('fa-floppy-disk');\n    saveBtn.appendChild(saveIcon);\n\n    saveBtn.addEventListener('click', function(){\n        ___WEBPACK_IMPORTED_MODULE_0__.preferences.language = languageSelect.value;\n        ___WEBPACK_IMPORTED_MODULE_0__.preferences.darkTheme = themeCheckbox.checked;\n        ___WEBPACK_IMPORTED_MODULE_0__.preferences.volume = volumeInput.value;\n\n        settings.close();\n\n        (0,___WEBPACK_IMPORTED_MODULE_0__.setPreferences)();\n        (0,___WEBPACK_IMPORTED_MODULE_0__.init)();\n        \n    });\n\n    main.appendChild(settings);\n    settings.appendChild(settingsTitle);\n    settings.appendChild(languageWrapper);\n    settings.appendChild(themeWrapper);\n    settings.appendChild(volumeWrapper);\n    settings.appendChild(saveBtn);\n\n    settings.showModal();\n}\n\n//# sourceURL=webpack://guessthenumber/./src/settings.js?");

/***/ }),

/***/ "./src/winScreen.js":
/*!**************************!*\
  !*** ./src/winScreen.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createWinScreen)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio */ \"./src/audio.js\");\n/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lang */ \"./src/lang.js\");\n\n\n\n\nfunction createWinScreen(tries){\n    const container = document.querySelector('.container');\n    container.dataset.mode = 'win';\n    container.innerHTML = '';\n\n    (0,_audio__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('success');\n\n    const winScreenTitle = document.createElement('h2');\n    winScreenTitle.textContent = (0,_lang__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('winScreenTitle');\n\n    const winScreenMessage = document.createElement('p');\n    winScreenMessage.textContent = (0,_lang__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('winScreenMessage').replace('x', tries.toString());\n\n    const menuBtn = document.createElement('button');\n    menuBtn.classList.add('btn');\n    menuBtn.textContent = (0,_lang__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('winScreenMenuButton');\n\n    const menuIcon = document.createElement('i');\n    menuIcon.classList.add('fa-solid');\n    menuIcon.classList.add('fa-right-from-bracket');\n\n    container.appendChild(winScreenTitle);\n    container.appendChild(winScreenMessage);\n    container.appendChild(menuBtn);\n\n    menuBtn.addEventListener('click', ___WEBPACK_IMPORTED_MODULE_0__.init);\n\n    \n}\n\n//# sourceURL=webpack://guessthenumber/./src/winScreen.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;