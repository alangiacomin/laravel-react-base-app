import { sprintf } from "sprintf-js";
import { routes } from "./routes";
import HomePage from "./home/HomePage";
import Pagina from "./pagina/PaginaPage";
import LoginPage from "./user/LoginPage";
import LogoutPage from "./user/LogoutPage";

export const routesWithComponents = {
           home: {
               ...routes.home,
               component: HomePage,
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
               component: Pagina
           },
       };
