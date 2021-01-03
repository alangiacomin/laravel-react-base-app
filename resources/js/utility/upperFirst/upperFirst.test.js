import upperFirst from '.';

describe('Utility: upperFirst', () => {
  test('null string', () => {
    const upper = upperFirst(null);
    expect(upper).toMatch('');
  });

  test('undefined string', () => {
    const upper = upperFirst(undefined);
    expect(upper).toMatch('');
  });

  test('not a string', () => {
    const upper = upperFirst(Array(7));
    expect(upper).toMatch('');
  });

  test('empty string', () => {
    const upper = upperFirst('');
    expect(upper).toMatch('');
  });

  test('one char string', () => {
    const upper = upperFirst('a');
    expect(upper).toMatch('A');
  });

  test('complex string', () => {
    const upper = upperFirst('tHE QUICK BROWN FOX JUMPED OVER THE LAZY DOGS');
    expect(upper).toMatch('The quick brown fox jumped over the lazy dogs');
  });
});
