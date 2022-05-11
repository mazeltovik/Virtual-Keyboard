const BODY = document.querySelector('body');
const firtsRowEng = [];
for (let i = 0; i <= 13; i += 1) {
  if (i === 0) firtsRowEng[i] = '`';
  else if (i === 10) firtsRowEng[i] = '0';
  else if (i === 11) firtsRowEng[i] = '-';
  else if (i === 12) firtsRowEng[i] = '=';
  else if (i === 13) firtsRowEng[i] = 'Backspace';
  else firtsRowEng[i] = `${i}`;
}

const secondRowEng = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'];
const thirdRowEng = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'];
const fourRowEng = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'up'];
const fiveRowEng = ['Win', '', 'Alt', 'Left', 'Bootom', 'Right', 'CtrlR'];
const firtsRowEngShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'];
const secondRowEngShift = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'];
const thirdRowEngShift = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'];
const fourRowEngShift = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'up'];
const keys = [
  firtsRowEng,
  secondRowEng,
  thirdRowEng,
  fourRowEng,
  fiveRowEng];
const keysShift = [
  firtsRowEngShift,
  secondRowEngShift,
  thirdRowEngShift,
  fourRowEngShift,
  fiveRowEng];
const firtsRowRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const secondRowRu = ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'];
const thirdRowRu = ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'];
const fourRowRu = ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'up'];
const firtsRowRuShift = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'];
const secondRowRuShift = ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del'];
const thirdRowRuShift = ['Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'];
const fourRowRuShift = ['Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'up'];
const keysRu = [firtsRowRu, secondRowRu, thirdRowRu, fourRowRu, fiveRowEng];
const keysRuShift = [
  firtsRowRuShift,
  secondRowRuShift,
  thirdRowRuShift,
  fourRowRuShift,
  fiveRowEng];
const keysCapsEng = keys.map((v) => v.map((key) => {
  let code = key;
  const reg = /^[a-z]$/;
  if (code.match(reg)) {
    code = code.toUpperCase();
  }
  return code;
}));

const keysCapsRu = keysRu.map((v) => v.map((key) => {
  let code = key;
  const reg = /^[а-я|ё]$/;
  if (code.match(reg)) {
    code = code.toUpperCase();
  }
  return code;
}));
// TextArea class
class TextArea {
  constructor() {
    this.content = '';
    this.elem = document.createElement('textarea');
  }

  render() {
    this.elem.className = 'textArea';
    BODY.insertAdjacentElement('afterbegin', this.elem);
    this.elem.addEventListener('input', () => {
    });
  }
}

const ta = new TextArea();
ta.render();

// Animated function
function animatedKeys(code) {
  const keyClass = document.querySelector(`.${code}`);
  if (!keyClass) return;
  keyClass.classList.add('keyActive');
  setTimeout(() => {
    keyClass.classList.remove('keyActive');
  }, 300);
}

// Keyboard key class;
class Key {
  constructor(content) {
    this.content = content;
    this.elem = document.createElement('div');
    this.capsLockActive = false;
  }

  render() {
    this.elem.textContent = this.content;
    this.elem.className = 'key';
    if (this.content === '`' || this.content === '~') {
      this.elem.classList.add('Backquote');
    } else if (this.content === '1' || this.content === '!') {
      this.elem.classList.add('Digit1');
    } else if (this.content === '2' || this.content === '@') {
      this.elem.classList.add('Digit2');
    } else if (this.content === '3' || this.content === '#') {
      this.elem.classList.add('Digit3');
    } else if (this.content === '4' || this.content === '$') {
      this.elem.classList.add('Digit4');
    } else if (this.content === '5' || this.content === '%') {
      this.elem.classList.add('Digit5');
    } else if (this.content === '6' || this.content === '^') {
      this.elem.classList.add('Digit6');
    } else if (this.content === '7' || this.content === '&') {
      this.elem.classList.add('Digit7');
    } else if (this.content === '8' || this.content === '*') {
      this.elem.classList.add('Digit8');
    } else if (this.content === '9' || this.content === '(') {
      this.elem.classList.add('Digit9');
    } else if (this.content === '0' || this.content === ')') {
      this.elem.classList.add('Digit0');
    } else if (this.content === '-' || this.content === '_') {
      this.elem.classList.add('Minus');
    } else if (this.content === '=' || this.content === '+') {
      this.elem.classList.add('Equal');
    } else if (this.content === 'Backspace') {
      this.elem.classList.add('Backspace');
    } else if (this.content === 'Tab') {
      this.elem.classList.add('Tab');
    } else if (this.content === '[' || this.content === '{') {
      this.elem.classList.add('BracketLeft');
    } else if (this.content === ']' || this.content === '}') {
      this.elem.classList.add('BracketRight');
    } else if (this.content === '\\' || this.content === '|') {
      this.elem.classList.add('Backslash');
    } else if (this.content === 'Del') {
      this.elem.classList.add('Delete');
    } else if (this.content === ';' || this.content === ':') {
      this.elem.classList.add('Semicolon');
    } else if (this.content === '\'' || this.content === '"') {
      this.elem.classList.add('Quote');
    } else if (this.content === 'Enter') {
      this.elem.classList.add('Enter');
    } else if (this.content === ',' || this.content === '<') {
      this.elem.classList.add('Comma');
    } else if (this.content === '.' || this.content === '>') {
      this.elem.classList.add('Period');
    } else if (this.content === '/' || this.content === '?') {
      this.elem.classList.add('Slash');
    } else if (this.content === '') {
      this.elem.classList.add('Space');
    } else if (this.content === 'CtrlR') {
      this.elem.classList.add('ControlRight');
    } else if (this.content === 'Win') {
      this.elem.classList.add('MetaLeft');
    } else {
      this.elem.classList.add(`Key${this.content.toUpperCase()}`);
    }

    this.elem.addEventListener('mousedown', (event) => {
      animatedKeys(event.target.classList[1]);
      if (this.content === 'Backspace') {
        ta.elem.value = ta.elem.value.slice(0, ta.elem.value.length - 1);
      } else if (this.content === 'Tab') {
        ta.elem.value += '    ';
      } else if (this.content === 'Enter') {
        ta.elem.value += '\n';
      } else if (this.content === 'Del') {
        ta.elem.value = '';
      } else if (this.content === '') {
        ta.elem.value += ' ';
      } else if (this.content === 'CtrlL' || this.content === 'CtrlR' || this.content === 'Win' || this.content === 'Alt') {
        ta.elem.value += '';
      } else ta.elem.value += this.elem.textContent;
    });
  }
}
// Keyboard Class
class Keyboard {
  constructor() {
    this.elem = document.createElement('div');
    this.lang = 'eng';
    this.shiftKey = false;
    this.divRows = [];
  }

  render() {
    this.elem.className = 'keyboard';
    this.elem.id = 'keyboard';
    document.querySelector('textarea').insertAdjacentElement('afterend', this.elem);
    return this;
  }

  renderRows() {
    for (let i = 0; i < 5; i += 1) {
      const divRow = document.createElement('div');
      divRow.className = `row${i}`;
      this.divRows.push(divRow);
    }
    this.elem.append(...this.divRows);
    return this;
  }

  addKeys(qwertyKeys) {
    const self = this;
    function helperAddKeys(j) {
      const arr = [];
      for (let i = 0; i < qwertyKeys[j].length; i += 1) {
        const key = new Key(qwertyKeys[j][i]);
        key.render();
        arr.push(key.elem);
      }
      self.divRows[j].append(...arr);
    }
    helperAddKeys(0);
    helperAddKeys(1);
    helperAddKeys(2);
    helperAddKeys(3);
    helperAddKeys(4);
    return this;
  }

  removeKeys() {
    [...this.elem.children].map((v) => {
      const child = [...v.children];
      child.forEach((key) => {
        if (key.textContent !== 'Caps Lock' && key.textContent !== 'Shift' && key.textContent !== 'CtrlL' && key.textContent !== 'AltL') key.remove();
      });
      return null;
    });
    return this;
  }
}

const keyboard = new Keyboard();
// Session storage
if (sessionStorage.getItem('lang') === 'ru') {
  keyboard.render().renderRows().addKeys(keysRu);
} else {
  sessionStorage.setItem('lang', 'eng');
  keyboard.render().renderRows().addKeys(keys);
}
const capsLock = document.createElement('div');
capsLock.textContent = 'Caps Lock';
capsLock.classList.add('CapsLock');
document.querySelector('.row2').insertAdjacentElement('afterbegin', capsLock);
capsLock.addEventListener('mousedown', (event) => {
  animatedKeys(event.target.classList[0]);
  capsLock.classList.toggle('activeCaps');
  if (capsLock.classList.contains('activeCaps') && sessionStorage.getItem('lang') === 'eng') {
    keyboard.removeKeys().addKeys(keysCapsEng);
  } else if (capsLock.classList.contains('activeCaps') && sessionStorage.getItem('lang') === 'ru') {
    keyboard.removeKeys().addKeys(keysCapsRu);
  } else if (!capsLock.classList.contains('activeCaps') && sessionStorage.getItem('lang') === 'ru') {
    keyboard.removeKeys().addKeys(keysRu);
  } else {
    keyboard.removeKeys().addKeys(keys);
  }
});

const lShift = document.createElement('div');
lShift.textContent = 'Shift';
lShift.classList.add('ShiftLeft');
document.querySelector('.row3').insertAdjacentElement('afterbegin', lShift);
lShift.addEventListener('mousedown', () => {
  lShift.classList.toggle('shiftActive');
  if (lShift.classList.contains('shiftActive') && sessionStorage.getItem('lang') === 'eng') {
    keyboard.removeKeys().addKeys(keysShift);
  } else if (lShift.classList.contains('shiftActive') && sessionStorage.getItem('lang') === 'ru') {
    keyboard.removeKeys().addKeys(keysRuShift);
  } else if (!lShift.classList.contains('shiftActive') && sessionStorage.getItem('lang') === 'ru') {
    keyboard.removeKeys().addKeys(keysRu);
  } else {
    keyboard.removeKeys().addKeys(keys);
  }
});

const ctrlL = document.createElement('div');
ctrlL.textContent = 'CtrlL';
ctrlL.classList.add('ControlLeft');
const altL = document.createElement('div');
altL.textContent = 'AltL';
altL.classList.add('AltLeft');
document.querySelector('.row4').prepend(ctrlL, altL);

const pressedCode = new Set();
document.addEventListener('keydown', (event) => {
  animatedKeys(event.code);
  if (event.key === 'Backspace') {
    ta.elem.value = ta.elem.value.slice(0, ta.elem.value.length - 1);
  } else if (event.key === 'Tab') {
    event.preventDefault();
    ta.elem.value += '    ';
  } else if (event.key === 'Enter') {
    ta.elem.value += '\n';
  } else if (event.key === '') {
    ta.elem.value += ' ';
  } else if (event.key === 'Delete') {
    ta.elem.value = '';
  } else if (event.key === 'Control' || event.key === 'Alt') {
    pressedCode.add(event.key);
    if (pressedCode.size === 2 && sessionStorage.getItem('lang') === 'eng') {
      keyboard.removeKeys().addKeys(keysRu);
      sessionStorage.setItem('lang', 'ru');
      pressedCode.clear();
    }
    if (pressedCode.size === 2 && sessionStorage.getItem('lang') === 'ru') {
      keyboard.removeKeys().addKeys(keys);
      sessionStorage.setItem('lang', 'eng');
      pressedCode.clear();
    }

    ta.elem.value += '';
  } else if (event.key === 'CapsLock') {
    capsLock.classList.toggle('activeCaps');
    if (capsLock.classList.contains('activeCaps') && sessionStorage.getItem('lang') === 'eng') {
      keyboard.removeKeys().addKeys(keysCapsEng);
    } else if (capsLock.classList.contains('activeCaps') && sessionStorage.getItem('lang') === 'ru') {
      keyboard.removeKeys().addKeys(keysCapsRu);
    } else if (!capsLock.classList.contains('activeCaps') && sessionStorage.getItem('lang') === 'ru') {
      keyboard.removeKeys().addKeys(keysRu);
    } else {
      keyboard.removeKeys().addKeys(keys);
    }
  } else if (event.key === 'Shift') {
    lShift.classList.toggle('shiftActive');
    if (lShift.classList.contains('shiftActive') && sessionStorage.getItem('lang') === 'eng') {
      keyboard.removeKeys().addKeys(keysShift);
    } else if (lShift.classList.contains('shiftActive') && sessionStorage.getItem('lang') === 'ru') {
      keyboard.removeKeys().addKeys(keysRuShift);
    } else if (!lShift.classList.contains('shiftActive') && sessionStorage.getItem('lang') === 'ru') {
      keyboard.removeKeys().addKeys(keysRu);
    } else {
      keyboard.removeKeys().addKeys(keys);
    }
  } else ta.elem.value += event.key;
});

const desc = document.createElement('p');
desc.textContent = 'Клавиатура создана в операционной системе Windows';
desc.className = 'desc';
document.querySelector('.keyboard').insertAdjacentElement('afterend', desc);

const lang = document.createElement('p');
lang.textContent = 'Для переключения языка комбинация: левыe CtrlL + AltL';
lang.className = 'lang';
document.querySelector('.desc').insertAdjacentElement('afterend', lang);
