import isEmptyString from '../isEmptyString';

const upperFirst = (value) => {
  if (isEmptyString(value) || typeof value !== 'string') {
    return '';
  }
  switch (value.length) {
    case 0: return '';
    case 1: return value.toUpperCase();
    default: return value.substring(0, 1).toUpperCase() + value.substring(1).toLowerCase();
  }
};

export default upperFirst;
