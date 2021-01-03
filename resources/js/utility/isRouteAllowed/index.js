import hasPermission from '../hasPermission';

const isRouteAllowed = (user, location, protectedRoutes) => {
  const protectedRoutesArray = Array.isArray(protectedRoutes) ? protectedRoutes : [protectedRoutes];
  const protRoute = protectedRoutesArray.find((r) => r.path === location.pathname);
  if (protRoute) {
    return hasPermission(user, protRoute.perm);
  }
  return true;
};

export default isRouteAllowed;
