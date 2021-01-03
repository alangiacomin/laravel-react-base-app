const explodeRoutes = (routesConfig, rootRoute) => {
  let routes = {};
  Object.entries(routesConfig ?? {}).forEach((value) => {
    const [key, route] = value;
    const routeKey = (rootRoute ? rootRoute.id + '_' : '') + key;

    const defaultRoute = {
      exact: true,
      isActive: (match) => match !== null,
      path: (rootRoute ? rootRoute.to : '') + route.to,
    };

    const newRoute = {
      id: routeKey,
      ...defaultRoute,
      ...route,
      to: (rootRoute ? rootRoute.to : '') + route.to,
    };
    routes = { ...routes, ...explodeRoutes(newRoute.subRoutes, newRoute) };
    delete newRoute.subRoutes;
    routes[routeKey] = newRoute;
  });

  return routes;
};

export default explodeRoutes;
