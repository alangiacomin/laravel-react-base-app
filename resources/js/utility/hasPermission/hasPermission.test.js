import hasPermission from '.';

describe('Utility: hasPermission', () => {
  test('description', () => {
    const result = hasPermission({});
    expect(result).toBe(true);
  });
});
