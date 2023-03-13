/* eslint-disable no-console */
import GameSavingLoader from './GameSavingLoader';

// Задача Promises
GameSavingLoader.load().then(
  (saving) => {
    console.log(saving);
    console.log('Задача Promises выполнена');
  },
  (error) => {
    console.log('error', error.message);
  },
);
