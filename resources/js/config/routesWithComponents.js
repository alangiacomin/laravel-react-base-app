import routes from './routes';
import LoginPage from '../pagine/Login';
import LogoutPage from '../user/LogoutPage';
import Pagina from '../pagine/Pagina';
import Home from '../pagine/Home';

const routesWithComponents = {
  home: {
    ...routes.home,
    component: Home,
  },
  login: {
    ...routes.login,
    component: LoginPage,
  },
  logout: {
    ...routes.logout,
    component: LogoutPage,
  },
  pagina: {
    ...routes.pagina,
    component: Pagina,
  },
  editor: {
    ...routes.editor,
    component: Home,
  },
};

export default routesWithComponents;
