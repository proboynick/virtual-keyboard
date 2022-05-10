const KEYS_EN_LOWER_CASE = [{ key: '`', code: 'Backquote' }, { key: '1', code: 'Digit1' }, { key: '2', code: 'Digit2' }, { key: '3', code: 'Digit3' },
  { key: '4', code: 'Digit4' }, { key: '5', code: 'Digit5' }, { key: '6', code: 'Digit6' }, { key: '7', code: 'Digit7' },
  { key: '8', code: 'Digit8' }, { key: '9', code: 'Digit9' }, { key: '0', code: 'Digit0' }, { key: '-', code: 'Minus' },
  { key: '=', code: 'Equal' }, { key: 'Backspace', code: 'Backspace' }, { key: 'Tab', code: 'Tab' }, { key: 'q', code: 'KeyQ' },
  { key: 'w', code: 'KeyW' }, { key: 'e', code: 'KeyE' }, { key: 'r', code: 'KeyR' }, { key: 't', code: 'KeyT' }, { key: 'y', code: 'KeyY' },
  { key: 'u', code: 'KeyU' }, { key: 'i', code: 'KeyI' }, { key: 'o', code: 'KeyO' }, { key: 'p', code: 'KeyP' }, { key: '[', code: 'BracketLeft' },
  { key: ']', code: 'BracketRight' }, { key: '\\', code: 'Backslash' }, { key: 'Del', code: 'Delete' }, { key: 'CapsLock', code: 'CapsLock' },
  { key: 'a', code: 'KeyA' }, { key: 's', code: 'KeyS' }, { key: 'd', code: 'KeyD' }, { key: 'f', code: 'KeyF' }, { key: 'g', code: 'KeyG' },
  { key: 'h', code: 'KeyH' }, { key: 'j', code: 'KeyJ' }, { key: 'k', code: 'KeyK' }, { key: 'l', code: 'KeyL' }, { key: ';', code: 'Semicolon' },
  { key: "'", code: 'Quote' }, { key: 'Enter', code: 'Enter' }, { key: 'Shift', code: 'ShiftLeft' }, { key: 'z', code: 'KeyZ' }, { key: 'x', code: 'KeyX' },
  { key: 'c', code: 'KeyC' }, { key: 'v', code: 'KeyV' }, { key: 'b', code: 'KeyB' }, { key: 'n', code: 'KeyN' }, { key: 'm', code: 'KeyM' },
  { key: ',', code: 'Comma' }, { key: '.', code: 'Period' }, { key: '/', code: 'Slash' }, { key: '↑', code: 'ArrowUp' }, { key: 'Shift', code: 'ShiftRight' },
  { key: 'CTRL', code: 'ControlLeft' }, { key: 'WIN', code: 'MetaLeft' }, { key: 'ALT', code: 'AltLeft' }, { key: ' ', code: 'Space' }, { key: 'ALT', code: 'AltRight' },
  { key: '←', code: 'ArrowLeft' }, { key: '↓', code: 'ArrowDown' }, { key: '→', code: 'ArrowRight' }, { key: 'CTRL', code: 'ControlRight' }];

const KEYS_EN_UPPER_CASE = [{ key: '~', code: 'Backquote' }, { key: '!', code: 'Digit1' }, { key: '@', code: 'Digit2' }, { key: '#', code: 'Digit3' },
  { key: '$', code: 'Digit4' }, { key: '%', code: 'Digit5' }, { key: '^', code: 'Digit6' }, { key: '&', code: 'Digit7' },
  { key: '*', code: 'Digit8' }, { key: '(', code: 'Digit9' }, { key: ')', code: 'Digit0' }, { key: '_', code: 'Minus' },
  { key: '+', code: 'Equal' }, { key: 'Backspace', code: 'Backspace' }, { key: 'Tab', code: 'Tab' }, { key: 'Q', code: 'KeyQ' },
  { key: 'W', code: 'KeyW' }, { key: 'E', code: 'KeyE' }, { key: 'R', code: 'KeyR' }, { key: 'T', code: 'KeyT' }, { key: 'Y', code: 'KeyY' },
  { key: 'U', code: 'KeyU' }, { key: 'I', code: 'KeyI' }, { key: 'O', code: 'KeyO' }, { key: 'P', code: 'KeyP' }, { key: '{', code: 'BracketLeft' },
  { key: '}', code: 'BracketRight' }, { key: '|', code: 'Backslash' }, { key: 'Del', code: 'Delete' }, { key: 'CapsLock', code: 'CapsLock' },
  { key: 'A', code: 'KeyA' }, { key: 'S', code: 'KeyS' }, { key: 'D', code: 'KeyD' }, { key: 'F', code: 'KeyF' }, { key: 'G', code: 'KeyG' },
  { key: 'H', code: 'KeyH' }, { key: 'J', code: 'KeyJ' }, { key: 'K', code: 'KeyK' }, { key: 'L', code: 'KeyL' }, { key: ':', code: 'Semicolon' },
  { key: '"', code: 'Quote' }, { key: 'Enter', code: 'Enter' }, { key: 'Shift', code: 'ShiftLeft' }, { key: 'Z', code: 'KeyZ' }, { key: 'X', code: 'KeyX' },
  { key: 'C', code: 'KeyC' }, { key: 'V', code: 'KeyV' }, { key: 'B', code: 'KeyB' }, { key: 'N', code: 'KeyN' }, { key: 'M', code: 'KeyM' },
  { key: '<', code: 'Comma' }, { key: '>', code: 'Period' }, { key: '?', code: 'Slash' }, { key: '↑', code: 'ArrowUp' }, { key: 'Shift', code: 'ShiftRight' },
  { key: 'CTRL', code: 'ControlLeft' }, { key: 'WIN', code: 'MetaLeft' }, { key: 'ALT', code: 'AltLeft' }, { key: ' ', code: 'Space' }, { key: 'ALT', code: 'AltRight' },
  { key: '←', code: 'ArrowLeft' }, { key: '↓', code: 'ArrowDown' }, { key: '→', code: 'ArrowRight' }, { key: 'CTRL', code: 'ControlRight' }];

const KEYS_RU_LOWER_CASE = [{ key: 'ё', code: 'Backquote' }, { key: '1', code: 'Digit1' }, { key: '2', code: 'Digit2' }, { key: '3', code: 'Digit3' },
  { key: '4', code: 'Digit4' }, { key: '5', code: 'Digit5' }, { key: '6', code: 'Digit6' }, { key: '7', code: 'Digit7' },
  { key: '8', code: 'Digit8' }, { key: '9', code: 'Digit9' }, { key: '0', code: 'Digit0' }, { key: '-', code: 'Minus' },
  { key: '=', code: 'Equal' }, { key: 'Backspace', code: 'Backspace' }, { key: 'Tab', code: 'Tab' }, { key: 'й', code: 'KeyQ' },
  { key: 'ц', code: 'KeyW' }, { key: 'у', code: 'KeyE' }, { key: 'к', code: 'KeyR' }, { key: 'е', code: 'KeyT' }, { key: 'н', code: 'KeyY' },
  { key: 'г', code: 'KeyU' }, { key: 'ш', code: 'KeyI' }, { key: 'щ', code: 'KeyO' }, { key: 'з', code: 'KeyP' }, { key: 'х', code: 'BracketLeft' },
  { key: 'ъ', code: 'BracketRight' }, { key: '\\', code: 'Backslash' }, { key: 'Del', code: 'Delete' }, { key: 'CapsLock', code: 'CapsLock' },
  { key: 'ф', code: 'KeyA' }, { key: 'ы', code: 'KeyS' }, { key: 'в', code: 'KeyD' }, { key: 'а', code: 'KeyF' }, { key: 'п', code: 'KeyG' },
  { key: 'р', code: 'KeyH' }, { key: 'о', code: 'KeyJ' }, { key: 'л', code: 'KeyK' }, { key: 'д', code: 'KeyL' }, { key: 'ж', code: 'Semicolon' },
  { key: "э", code: 'Quote' }, { key: 'Enter', code: 'Enter' }, { key: 'Shift', code: 'ShiftLeft' }, { key: 'я', code: 'KeyZ' }, { key: 'ч', code: 'KeyX' },
  { key: 'с', code: 'KeyC' }, { key: 'м', code: 'KeyV' }, { key: 'и', code: 'KeyB' }, { key: 'т', code: 'KeyN' }, { key: 'ь', code: 'KeyM' },
  { key: 'б', code: 'Comma' }, { key: 'ю', code: 'Period' }, { key: '.', code: 'Slash' }, { key: '↑', code: 'ArrowUp' }, { key: 'Shift', code: 'ShiftRight' },
  { key: 'CTRL', code: 'ControlLeft' }, { key: 'WIN', code: 'MetaLeft' }, { key: 'ALT', code: 'AltLeft' }, { key: ' ', code: 'Space' }, { key: 'ALT', code: 'AltRight' },
  { key: '←', code: 'ArrowLeft' }, { key: '↓', code: 'ArrowDown' }, { key: '→', code: 'ArrowRight' }, { key: 'CTRL', code: 'ControlRight' }];

const KEYS_RU_UPPER_CASE = [{ key: 'Ё', code: 'Backquote' }, { key: '!', code: 'Digit1' }, { key: '"', code: 'Digit2' }, { key: '№', code: 'Digit3' },
  { key: ';', code: 'Digit4' }, { key: '%', code: 'Digit5' }, { key: ':', code: 'Digit6' }, { key: '?', code: 'Digit7' },
  { key: '*', code: 'Digit8' }, { key: '(', code: 'Digit9' }, { key: ')', code: 'Digit0' }, { key: '_', code: 'Minus' },
  { key: '+', code: 'Equal' }, { key: 'Backspace', code: 'Backspace' }, { key: 'Tab', code: 'Tab' }, { key: 'Й', code: 'KeyQ' },
  { key: 'Ц', code: 'KeyW' }, { key: 'У', code: 'KeyE' }, { key: 'К', code: 'KeyR' }, { key: 'Е', code: 'KeyT' }, { key: 'Н', code: 'KeyY' },
  { key: 'Г', code: 'KeyU' }, { key: 'Ш', code: 'KeyI' }, { key: 'Щ', code: 'KeyO' }, { key: 'З', code: 'KeyP' }, { key: 'Х', code: 'BracketLeft' },
  { key: 'Ъ', code: 'BracketRight' }, { key: '/', code: 'Backslash' }, { key: 'Del', code: 'Delete' }, { key: 'CapsLock', code: 'CapsLock' },
  { key: 'Ф', code: 'KeyA' }, { key: 'Ы', code: 'KeyS' }, { key: 'В', code: 'KeyD' }, { key: 'А', code: 'KeyF' }, { key: 'П', code: 'KeyG' },
  { key: 'Р', code: 'KeyH' }, { key: 'О', code: 'KeyJ' }, { key: 'Д', code: 'KeyK' }, { key: 'Ж', code: 'KeyL' }, { key: 'Э', code: 'Semicolon' },
  { key: 'Э', code: 'Quote' }, { key: 'Enter', code: 'Enter' }, { key: 'Shift', code: 'ShiftLeft' }, { key: 'Я', code: 'KeyZ' }, { key: 'Ч', code: 'KeyX' },
  { key: 'С', code: 'KeyC' }, { key: 'М', code: 'KeyV' }, { key: 'И', code: 'KeyB' }, { key: 'Т', code: 'KeyN' }, { key: 'Ь', code: 'KeyM' },
  { key: 'Б', code: 'Comma' }, { key: 'Ю', code: 'Period' }, { key: ',', code: 'Slash' }, { key: '↑', code: 'ArrowUp' }, { key: 'Shift', code: 'ShiftRight' },
  { key: 'CTRL', code: 'ControlLeft' }, { key: 'WIN', code: 'MetaLeft' }, { key: 'ALT', code: 'AltLeft' }, { key: ' ', code: 'Space' }, { key: 'ALT', code: 'AltRight' },
  { key: '←', code: 'ArrowLeft' }, { key: '↓', code: 'ArrowDown' }, { key: '→', code: 'ArrowRight' }, { key: 'CTRL', code: 'ControlRight' }];

function createKbd() {
  const WRAPPER = document.createElement('div');
  WRAPPER.classList.add('wrapper');
  const TEXTAREA = document.createElement('textarea');
  TEXTAREA.classList.add('textarea');
  TEXTAREA.rows = 5;
  TEXTAREA.cols = 94;
  WRAPPER.appendChild(TEXTAREA);
  const KBD = document.createElement('div');
  KBD.classList.add('keyboard');
  WRAPPER.appendChild(KBD);
  document.body.appendChild(WRAPPER);
  for (let i = 0; i < KEYS_EN_LOWER_CASE.length; i += 1) {
    const KEY = document.createElement('div');
    KEY.classList.add('key');
    KEY.classList.add(KEYS_EN_LOWER_CASE[i].code);
    KEY.innerHTML = KEYS_EN_LOWER_CASE[i].key;
    KEY.addEventListener("mousedown", enterData);
    KBD.appendChild(KEY);
  }
}
createKbd();

function enterData(event) {
  console.log(event);
  event.target.classList.add("pressed");
  let textarea = document.querySelector(".textarea");
  textarea.innerHTML += event.target.innerHTML; 
}

document.onkeydown = function (event) {
  document.querySelector(`.${event.code}`).classList.add("pressed");
  if (event.code === 'ControlLeft') {
    document.onkeyup = function (event) {
      if (event.code === 'AltLeft') {
        KEYS_RU_LOWER_CASE.forEach((element) => {
          const selKey = document.querySelector(`.${element.code}`);
          selKey.innerHTML = `${element.key}`;
        });
      } else {
        document.querySelector(`.${event.code}`).classList.remove("pressed"); 
      }
    }
  }
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    KEYS_EN_UPPER_CASE.forEach((element) => {
      const selKey = document.querySelector(`.${element.code}`);
      selKey.innerHTML = `${element.key}`;
    });
  }
};



function changeLang(event) {
  if (event.code === 'ControlLeft') {
    document.onkeyup = function (event) {
      if (event.code === 'AltLeft') {
        KEYS_RU_LOWER_CASE.forEach((element) => {
          const selKey = document.querySelector(`.${element.code}`);
          selKey.innerHTML = `${element.key}`;
        });
      }
    }
  }
};


document.onkeyup = function (event) {
  document.querySelector(`.${event.code}`).classList.remove("pressed");
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    KEYS_EN_LOWER_CASE.forEach((element) => {
      const selKey = document.querySelector(`.${element.code}`);
      selKey.innerHTML = `${element.key}`;
    });
  }
};
