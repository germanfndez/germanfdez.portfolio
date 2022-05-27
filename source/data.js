export const DIR = '@Germancito';

export const CONSOLE_MESSAGES = {
  ['BOOT']: {
    ['es']:
      '<p class="text light-green">Portfolio German Fernandez<br>Escribe help para ver los comandos disponibles</p>',
  },
  ['MESSAGES']: {
    ['es']: {
      ['not_found']: '<p class="text light-green">Comando no encontrado</p>',
    },
  },
};

export const COMMANDS = {
  ['help']: (args) => {
    console.log(args);
    if (args[0]) {
      return '<a href="www.youtube.com">Youtube</a>';
    } else {
      return '<p class="text light-green">Comandos disponibles:</p>';
    }
  },
};
