import { CONSOLE_MESSAGES } from './data.js';
import { displayInputMessage, displayMessage } from './display.js';
import { $ } from './lib.js';

const terminal = {
  language: 'es',
  commandsHistory: [],
  currentIndex: -1,
};
const $display = $('#display');
const $input = $('#read');

(function () {
  displayMessage($display, CONSOLE_MESSAGES.BOOT[terminal.language]);
})();

$input.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    const fullCommand = $input.value.split(' ');
    const command = fullCommand[0];
    const args = fullCommand.slice(1);

    command.trim() === '' ? null : displayInputMessage($display, command, args);
    $input.value = '';
    terminal.commandsHistory = [command, ...terminal.commandsHistory];
    terminal.currentIndex = -1;
    return;
  }

  if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    let { currentIndex, commandsHistory } = terminal;

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
