import trimStart from '.';

describe('Utility: trimStart', () => {
  test('null string', () => {
    const trimmed = trimStart(null);
    expect(trimmed).toMatch('');
  });

  test('undefined string', () => {
    const trimmed = trimStart(undefined);
    expect(trimmed).toMatch('');
  });

  test('not a string', () => {
    const trimmed = trimStart(Array(7));
    expect(trimmed).toMatch('');
  });

  test('empty string', () => {
    const trimmed = trimStart('');
    expect(trimmed).toMatch('');
  });

  test('no trim, default char', () => {
    const trimmed = trimStart('xProva');
    expect(trimmed).toMatch('xProva');
  });

  test('no trim, empty char', () => {
    const trimmed = trimStart('xProva', '');
    expect(trimmed).toMatch('xProva');
  });

  test('first char', () => {
    const trimmed = trimStart('xProva', 'x');
    expect(trimmed).toMatch('Prova');
  });

  test('not first char', () => {
    const trimmed = trimStart('xProva', 'P');
    expect(trimmed).toMatch('Prova');
  });
});
