import explodeRoutes from '.';

describe('Utility: explodeRoutes', () => {
  test('null config', () => {
    const routes = explodeRoutes(null);
    expect(routes).toEqual({});
  });

  test('empty object config', () => {
    const routes = explodeRoutes({});
    expect(routes).toEqual({});
  });

  test('missing path', () => {
    const routes = explodeRoutes({
      home: {
        title: 'Home',
        to: '/home',
      },
    });
    expect(routes).toMatchObject({
      home: {
        title: 'Home',
        to: '/home',
        path: '/home',
      },
    });
  });

  test('remove subroutes', () => {
    const routes = explodeRoutes({
      home: {
        title: 'Home',
        to: '/home',
        subRoutes: {},
      },
    });
    expect(routes).not.toMatchObject({
      home: {
        subRoutes: {},

      },
    });
  });

  test('split subroutes', () => {
    const routes = explodeRoutes({
      page: {
        title: 'page',
        to: '/page',
        exact: false,
        subRoutes: {
          edit: {
            to: '/edit',
            perm: 'edit_page_data',
          },
        },
      },
    });
    expect(routes).toMatchObject({
      page: {
        title: 'page',
        to: '/page',
      },
      page_edit: {
        to: '/page/edit',
        perm: 'edit_page_data',
      },
    });
  });
});
