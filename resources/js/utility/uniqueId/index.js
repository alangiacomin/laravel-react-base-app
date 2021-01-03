const uniqueId = (prefix = '') => {
  const id = (Date.now() + '' + Math.random()).replace('.', '');
  const validPrefix = typeof prefix === 'string' ? prefix : '[' + typeof prefix + ']_';

  return validPrefix + id;
};

export default uniqueId;
