// import LogoutPage from '../user/LogoutPage';
import { lazy } from 'react';
import withSuspense from '../hoc/withSuspense';
import LogoutPage from '../user/LogoutPage';
import routes from './routes';

// import Pagina from '../pagine/Pagina';
// const Pagina = lazy(() => import('../pagine/Pagina'));

const routesWithComponents = {
  home: {
    ...routes.home,
    component: withSuspense(lazy(() => import('../pagine/Home'))),
    // component: import('../pagine/Home'),
    // component: Home,
  },
  login: {
    ...routes.login,
    component: withSuspense(lazy(() => import('../pagine/Login'))),
  },
  logout: {
    ...routes.logout,
    component: LogoutPage,
  },
  pagina: {
    ...routes.pagina,
    component: withSuspense(lazy(() => import('../pagine/Pagina'))),
    // component: Pagina,
  },
  editor: {
    ...routes.editor,
    component: withSuspense(lazy(() => import('../pagine/Home'))),
  },
};

export default routesWithComponents;
