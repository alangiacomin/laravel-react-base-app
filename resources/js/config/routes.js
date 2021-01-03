import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import LogoutPage from '../pages/LogoutPage';
import PaginaPage from '../pages/PaginaPage';
import { absoluteUrl, explodeRoutes } from '../utility';

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

  birre: {
    title: 'Elementi',
    to: '/elementi',
    component: HomePage,
  },

  birrificio: {
    title: 'Elemento',
    to: '/elemento',
    component: HomePage,
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

export default explodeRoutes(routesConfig);
