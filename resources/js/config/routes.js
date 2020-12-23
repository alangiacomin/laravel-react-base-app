import { absoluteUrl } from '../common/utility';

const addRoute = (data) => {
  const defaultRoute = {
    exact: true,
    isActive: (match) => match !== null,
    path: data.to,
  };
  window._.forEach(data.subRoutes, (v, k) => {
    routes[data.id + '_' + k] = {
      ...defaultRoute,
      ...v,
      to: data.to + v.to,
      path: data.to + v.to,
    };
  });
  const route = {
    ...defaultRoute,
    ...data,
  };
  delete route.subRoutes;
  routes[data.id] = route;
};

const routes = {};

addRoute({
  id: 'home',
  title: 'Home',
  to: '/',
  // isActive: (match, location) => {
  //    return true;
  //    //return (
  //    //    match !== null ||
  //    //    location.pathname.startsWith("/xxx") ||
  //    //    location.pathname.startsWith("/yyy")
  //    //);
  // }
});

addRoute({
  id: 'admin',
  title: 'Admin',
  perm: 'browse_admin',
  to: absoluteUrl('/admin'),
});

addRoute({
  id: 'login',
  title: 'Login',
  to: '/login',
  perm: 'special_guests_only',
});

addRoute({
  id: 'logout',
  title: 'Logout',
  to: '/logout',
  perm: 'special_users_only',
});

addRoute({
  id: 'pagina',
  title: 'Pagina',
  to: '/pagina',
  exact: false,
  subRoutes: {
    edit: {
      to: '/edit',
      perm: 'edit_page_data',
    },
  },
});

addRoute({
  id: 'nonesiste',
  title: 'Non esiste',
  to: '/nonesiste',
});

addRoute({
  id: 'editor',
  title: 'Editor',
  to: '/editor',
  perm: 'edit_page_data',
});

export default routes;
