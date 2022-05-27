import { COMMANDS, CONSOLE_MESSAGES, DIR } from './data.js';

export const displayMessage = (display, html) => {
  const element = document.createElement('p');
  element.innerHTML = html;

  display.appendChild(element);
};

export const displayInputMessage = (display, command, args) => {
  const dirElement = document.createElement('span');
  dirElement.classList.add('green');
  dirElement.textContent = `${DIR}: ${command} ${args.join(' ')}`;

  const newElement = document.createElement('p');
  newElement.innerHTML =
    typeof COMMANDS[command] == 'function'
      ? COMMANDS[command](args)
      : CONSOLE_MESSAGES.MESSAGES['es'].not_found;

  display.appendChild(dirElement);
  display.appendChild(newElement);

  window.scrollTo(0, document.body.scrollHeight);
};
