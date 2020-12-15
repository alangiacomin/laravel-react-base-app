import { absoluteUrl } from '../common/utility';

const setRoute = (data) => ({
  exact: true,
  isActive: (match) => match !== null,
  path: data.to,
  ...data,
});

const routes = Object.fromEntries(
  Object.entries({
    home: setRoute({
      title: 'Home',
      to: '/',
      exact: true,
    // isActive: (match, location) => {
    //    return true;
    //    //return (
    //    //    match !== null ||
    //    //    location.pathname.startsWith("/xxx") ||
    //    //    location.pathname.startsWith("/yyy")
    //    //);
    // }
    }),
    admin: setRoute({
      title: 'Admin',
      // to: "/admin",
      perm: 'browse_admin',
      to: absoluteUrl('/admin'),
    }),
    login: setRoute({
      title: 'Login',
      to: '/login',
      perm: 'special_guests_only',
    }),
    logout: setRoute({
      title: 'Logout',
      to: '/logout',
      perm: 'special_users_only',
    }),
    pagina: setRoute({
      title: 'Pagina',
      to: '/pagina',
    }),
    nonesiste: setRoute({
      title: 'Non esiste',
      to: '/nonesiste',
    }),
  })
    // con la "map" aggiungo per ogni elemento anche il suo id
    .map(([key, val]) => [key, Object.fromEntries([...Object.entries(val), ['id', key]])]),
);

export default routes;
