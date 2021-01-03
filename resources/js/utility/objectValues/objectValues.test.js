import objectValues from '.';

describe('Utility: objectValues', () => {
  test('null object', () => {
    const values = objectValues(null);
    expect(values).toMatchObject([]);
  });

  test('undefined object', () => {
    const values = objectValues(undefined);
    expect(values).toMatchObject([]);
  });

  test('not a object', () => {
    const values = objectValues('string');
    expect(values).toMatchObject([]);
  });

  test('empty object', () => {
    const values = objectValues({});
    expect(values).toMatchObject([]);
  });

  test('one element object', () => {
    const values = objectValues({ one: 'one' });
    expect(values).toEqual(expect.arrayContaining(['one']));
  });

  test('many elements object', () => {
    const values = objectValues({ one: 'one', two: 'two', three: 'three' });
    expect(values).toEqual(expect.arrayContaining(['one', 'two', 'three']));
  });
});
