import { CONSOLE_MESSAGES } from './data.js';
import { displayInputMessage, displayMessage } from './display.js';
import { $ } from './lib.js';

const language = 'es';
const $display = $('#display');
const $input = $('#read');

(function () {
  displayMessage($display, CONSOLE_MESSAGES.BOOT[language]);
})();

$input.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    const inputValue = $input.value;
    inputValue.trim() === '' ? null : displayInputMessage($display, inputValue);
    $input.value = '';
    return;
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
