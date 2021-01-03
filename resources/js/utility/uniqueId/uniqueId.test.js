import uniqueId from '.';

describe('Utility: uniqueId', () => {
  test('no prefix', () => {
    const unique = uniqueId();
    expect(unique).toMatch(new RegExp(/^[0-9]+$/));
  });

  test('empty prefix', () => {
    const unique = uniqueId('');
    expect(unique).toMatch(new RegExp(/^[0-9]+$/));
  });

  test('number prefix', () => {
    const unique = uniqueId(7);
    expect(unique).toMatch(new RegExp(/^\[number\]_[0-9]+$/));
  });

  test('array prefix', () => {
    const unique = uniqueId([]);
    expect(unique).toMatch(new RegExp(/^\[object\]_[0-9]+$/));
  });

  test('object prefix', () => {
    const unique = uniqueId({});
    expect(unique).toMatch(new RegExp(/^\[object\]_[0-9]+$/));
  });

  test('string prefix', () => {
    const unique = uniqueId('prfx_');
    expect(unique).toMatch(new RegExp(/^prfx_[0-9]+$/));
  });
});
