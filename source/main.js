import { CONSOLE_MESSAGES } from './data.js';
import { displayInputMessage, displayMessage } from './display.js';
import { $ } from './lib.js';

export const terminal = {
  language: 'en',
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
    if (terminal.commandsHistory.length === 0) {
      return;
    }

    event.key === 'ArrowUp' ? terminal.currentIndex++ : terminal.currentIndex--;
    console.log(terminal.currentIndex);
    if (terminal.currentIndex > terminal.commandsHistory.length - 1) {
      terminal.currentIndex = terminal.commandsHistory.length - 1;
    } else if (terminal.currentIndex < 0) {
      terminal.currentIndex = 0;
    }
    $input.value = terminal.commandsHistory[terminal.currentIndex];
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
