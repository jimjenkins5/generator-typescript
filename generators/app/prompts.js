'use strict';

module.exports = (config) => {
   return [
      {
         type: 'input',
         name: 'projectName',
         message: 'What is your project\'s name?',
         'default': () => config.folderName,
      },
      {
         type: 'confirm',
         name: 'isBackEnd',
         message: 'Is this a back-end project?',
         'default': true,
      },
      {
         type: 'confirm',
         name: 'isLibrary',
         message: 'Is this a library?',
         'default': true,
      },
      {
         type: 'input',
         name: 'globalVarName',
         message: 'What is the name of the global variable you want this library to expose on `window`?',
         when: (context) => !context.isBackEnd && context.isLibrary,
      },
      {
         type: 'confirm',
         name: 'isOpenSource',
         message: 'Will this project be open source?',
         'default': (context) => context.isLibrary,
      },
   ];
};
