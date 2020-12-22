import { absoluteUrl } from '../common/utility';

const addRoute = (data) => {
  const route = {
    exact: true,
    isActive: (match) => match !== null,
    path: data.to,
    ...data,
  };
  window._.forEach(data.subRoutes, (v, k) => {
    route[k] = v;
  });
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
});

addRoute({
  id: 'nonesiste',
  title: 'Non esiste',
  to: '/nonesiste',
});

export default routes;
