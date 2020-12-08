import { sprintf } from "sprintf-js";
import { absoluteUrl } from "./common/utility";

export const routes = {
    home: {
        title: "Home",
        to: "/",
        path: "/",
        exact: true,
        //isActive: (match, location) => {
        //    return true;
        //    //return (
        //    //    match !== null ||
        //    //    location.pathname.startsWith("/xxx") ||
        //    //    location.pathname.startsWith("/yyy")
        //    //);
        //}
    },
    admin: {
        title: "Admin",
        //to: "/admin",
        perm: "browse_admin",
        to: absoluteUrl("/admin"),
    },
    login: {
        title: "Login",
        to: "/login",
        perm: "special_guests_only",
        path: "/login",
    },
    logout: {
        title: "Logout",
        to: "/logout",
        perm: "special_users_only",
        path: "/logout",
    },
    pagina: {
        title: "Pagina",
        to: "/pagina",
        path: "/pagina",
    },
};

export function routePermissions(route) {
    return {
        perm: route.perm ?? "",
        usersOnly: route.usersOnly ?? false,
        guestsOnly: route.guestsOnly ?? false,
    };
}
