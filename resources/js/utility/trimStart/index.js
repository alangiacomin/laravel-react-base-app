import isEmptyString from '../isEmptyString';

const trimStart = (value, chars = ' ') => {
  if (typeof value !== 'string' || isEmptyString(value)) {
    return '';
  }

  const charsToRemove = Array.isArray(chars) ? chars : [chars];
  let newValue = value;

  let restart = false;
  do {
    restart = false;
    for (let index = 0; !restart && index < charsToRemove.length; index++) {
      if (!isEmptyString(charsToRemove[index]) && newValue.startsWith(charsToRemove[index])) {
        newValue = newValue.substring(charsToRemove[index].length);
        restart = true;
      }
    }
  } while (restart);

  return newValue;
};

export default trimStart;
