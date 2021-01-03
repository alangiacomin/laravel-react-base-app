import routes from './routes';

const navbarLinks = {
  topLeft: [
    routes.pagina,
    routes.birre,
    routes.birrificio,
    routes.editor,
    routes.nonesiste,
  ],
  topRight: [
    routes.login,
    routes.admin,
    routes.logout,
  ],
};

export default navbarLinks;
