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
    return `<p class="text green">Available commands:</p>
      <p class="text light-green italic">help - Show available commands</p>
      <p class="text light-green italic">about - Show German information</p>
      <p class="text light-green italic">contact - Show contact information</p>
      <p class="text light-green italic">projects - Show my projects</p>
      <p class="text light-green italic">clear - Clear the console</p>
      `;
  },
  ['about']: (args) => {
    return `<p class="text light-green">I am <span class="green">German</span>, a young boy who like programming. I am really keen on <span class="green">Web Development</span>, more specifically <span class="green">Backend</span>.</p>`;
  },
  ['contact']: (args) => {
    return `<p class="text light-green">Sites you can contact me:</p>
      <a class="text light-green italic" href="https://github.com/Germancitoz" target="_blank">Github</a>
      <a class="text light-green italic" href="mailto: germanfernandez@gmail.com" target="_blank">Mail</a>
      <a class="text light-green italic" href="https://discord.com/users/546732670005149706" target="_blank">Discord</a>
      `;
  },
  ['projects']: (args) => {
    return `<p class="text light-green">Popular projects:</p>
    <p class="text light-green italic"><a class="text light-green italic" href="https://github.com/Germancitoz/easylogger" target="_blank">easylogger</a>- Lightweight and configurable JavaScript logger</p>
    <p class="text light-green italic"><a class="text light-green italic" href="https://github.com/Germancitoz/users.manager.api" target="_blank">userManagerAPI</a>- Simple API for use on Frontend, to manage users using MongoDB, NodeJS(Express), JSDoc</p>
    <p class="text light-green italic"><a class="text light-green italic" href="https://github.com/Germancitoz/MPass" target="_blank">MPass</a>- Basic Python (Tkinter) password manager</p>
    <p class="text light-green italic">You can see more on my <a class="text green italic" href="https://github.com/Germancitoz?tab=repositories" target="_blank">Github</a></p>
    `;
  },
  ['clear']: (args) => {
    return window.location.reload();
  },
};
