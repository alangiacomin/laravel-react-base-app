import { forEach } from 'lodash';
import { absoluteUrl } from '../common/utility';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import LogoutPage from '../pages/LogoutPage';
import PaginaPage from '../pages/PaginaPage';

const routesConfig = {
  home: {
    title: 'Home',
    to: '/',
    component: HomePage,
  },

  admin: {
    title: 'Admin',
    perm: 'browse_admin',
    to: absoluteUrl('/admin'),
  },

  login: {
    title: 'Login',
    to: '/login',
    perm: 'special_guests_only',
    component: LoginPage,
  },

  logout: {
    title: 'Logout',
    to: '/logout',
    perm: 'special_users_only',
    component: LogoutPage,
  },

  pagina: {
    title: 'page',
    to: '/pagina',
    exact: false,
    component: PaginaPage,
    subRoutes: {
      edit: {
        to: '/edit',
        perm: 'edit_page_data',
      },
    },
  },

  nonesiste: {
    title: 'not_exist',
    to: '/nonesiste',
  },

  editor: {
    title: 'Editor',
    to: '/editor',
    perm: 'edit_page_data',
  },
};

const explodeRoutes = () => {
  const routes = {};
  forEach(routesConfig, (value, key) => {
    const defaultRoute = {
      exact: true,
      isActive: (match) => match !== null,
      path: value.to,
    };
    forEach(value.subRoutes, (v, k) => {
      routes[key + '_' + k] = {
        id: key + '_' + k,
        ...defaultRoute,
        ...v,
        to: value.to + v.to,
        path: value.to + v.to,
      };
    });
    const route = {
      id: key,
      ...defaultRoute,
      ...value,
    };
    delete route.subRoutes;
    routes[key] = route;
  });

  return routes;
};

export default explodeRoutes();
