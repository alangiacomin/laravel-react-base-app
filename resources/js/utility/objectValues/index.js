const objectValues = (obj) => {
  if (obj === null || obj === undefined || typeof obj !== 'object') {
    return [];
  }
  return Object.entries(obj).map((o) => {
    const [key, value] = o;
    return value;
  });
};

export default objectValues;
