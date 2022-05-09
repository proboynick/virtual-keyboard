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

function createKbd() {
  const WRAPPER = document.createElement('div');
  WRAPPER.classList.add('wrapper');
  const KBD = document.createElement('div');
  KBD.classList.add('keyboard');
  WRAPPER.appendChild(KBD);
  document.body.appendChild(WRAPPER);
  for (let i = 0; i < KEYS_EN_LOWER_CASE.length; i += 1) {
    const KEY = document.createElement('div');
    KEY.classList.add('key');
    KEY.classList.add(KEYS_EN_LOWER_CASE[i].code);
    KEY.innerHTML = KEYS_EN_LOWER_CASE[i].key;
    KBD.appendChild(KEY);
  }
}
createKbd();

document.onkeydown = function (event) {
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    document.querySelector(`.${event.code}`).classList.add("pressed");
    KEYS_EN_UPPER_CASE.forEach((element) => {
      const selKey = document.querySelector(`.${element.code}`);
      selKey.innerHTML = `${element.key}`;
    });
  }
};

document.onkeyup = function (event) {
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    document.querySelector(`.${event.code}`).classList.remove("pressed");
    KEYS_EN_LOWER_CASE.forEach((element) => {
      const selKey = document.querySelector(`.${element.code}`);
      selKey.innerHTML = `${element.key}`;
    });
  }
};

createKbd();
