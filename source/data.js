export const DIR = '@Germancito';

export const CONSOLE_MESSAGES = {
  ['BOOT']: {
    ['en']:
      '<p class="text light-green">German Fernandez Terminal | v0.1<br>See available commands, type <i>help</i></p>',
  },
  ['MESSAGES']: {
    ['en']: {
      ['not_found']: '<p class="text light-green">Command not found</p>',
    },
  },
};

export const COMMANDS = {
  ['help']: (args) => {
    return `<p class="text light-green">Available commands:</p>
      <p class="text light-green italic">help - Show available commands</p>
      <p class="text light-green italic">clear - Clear terminal</p>
      <p class="text light-green italic">about - Show German information</p>
      <p class="text light-green italic">contact - Show contact information</p>
    `;
  },
  ['clear']: (args) => {
    return window.location.reload();
  },
};
