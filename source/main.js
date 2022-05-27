import { CONSOLE_MESSAGES } from './data.js';
import { displayInputMessage, displayMessage } from './display.js';
import { $ } from './lib.js';

const language = 'es';
const $display = $('#display');
const $input = $('#read');

let commandsHistory = [];
let currentIndex = -1;

(function () {
  displayMessage($display, CONSOLE_MESSAGES.BOOT[language]);
})();

$input.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    const inputValue = $input.value;
    inputValue.trim() === '' ? null : displayInputMessage($display, inputValue);
    $input.value = '';
    commandsHistory = [inputValue, ...commandsHistory];
    currentIndex = -1;
    return;
  }

  if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    if (commandsHistory.length === 0) {
      return;
    }

    event.key === 'ArrowUp' ? currentIndex++ : currentIndex--;
    if (currentIndex > commandsHistory.length - 1) {
      currentIndex = commandsHistory.length - 1;
    } else if (currentIndex < 0) {
      currentIndex = 0;
    }

    $input.value = commandsHistory[currentIndex];
  }
});

window.document.addEventListener('keyup', (event) => {
  $input.focus();
  window.scrollTo(0, document.body.scrollHeight);
});

window.document.addEventListener('dblclick', (event) => {
  $input.focus();
  window.scrollTo(0, document.body.scrollHeight);
});
