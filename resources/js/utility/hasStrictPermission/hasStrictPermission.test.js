import hasStrictPermission from '.';

describe('Utility: hasStrictPermission', () => {
  test('description', () => {
    const result = hasStrictPermission(null);
    expect(result).toBe(true);
  });
});
