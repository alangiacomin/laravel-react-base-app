import isEmptyString from '.';

describe('Utility: isEmptyString', () => {
  test('null string', () => {
    const empty = isEmptyString(null);
    expect(empty).toBe(true);
  });

  test('undefined string', () => {
    const empty = isEmptyString(undefined);
    expect(empty).toBe(true);
  });

  test('not a string', () => {
    const empty = isEmptyString(Array(7));
    expect(empty).toBe(false);
  });

  test('empty string', () => {
    const empty = isEmptyString('');
    expect(empty).toBe(true);
  });

  test('full string', () => {
    const empty = isEmptyString('The quick brown fox jumped over the lazy dogs');
    expect(empty).toBe(false);
  });
});
