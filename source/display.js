import { COMMANDS, CONSOLE_MESSAGES, DIR } from './data.js';

export const displayMessage = (display, html) => {
  const element = document.createElement('p');
  element.innerHTML = html;

  display.appendChild(element);
};

export const displayInputMessage = (display, command) => {
  const dirElement = document.createElement('span');
  dirElement.classList.add('green');
  dirElement.textContent = `${DIR}: ${command}`;

  const newElement = document.createElement('p');
  newElement.innerHTML =
    COMMANDS[command] ?? CONSOLE_MESSAGES.MESSAGES['es'].not_found;

  display.appendChild(dirElement);
  display.appendChild(newElement);

  window.scrollTo(0, document.body.scrollHeight);
};
