import {
  find, isArray, isEmpty, join, trimStart,
} from 'lodash';

export function absoluteUrl(path) {
  return process.env.MIX_APP_URL + '/' + trimStart(path, '/');
}

export function preventPropagation(event, callback) {
  return (dispatch) => {
    event.preventDefault();
    event.stopPropagation();
    callback && callback();
  };
}

export function setDocumentTitle(text, separator = ' - ') {
  document.title = defineDocumentTitle(text, separator);
}

export function defineDocumentTitle(text, separator = ' - ') {
  const rootTitle = process.env.MIX_APP_NAME;
  if (isEmpty(text)) {
    return rootTitle;
  }
  if (isEmpty(separator)) {
    return text;
  }
  return join([rootTitle, text], separator);
}

export function makeRequest(params) {
  const defaults = {
    url: '',
    method: 'get',
    data: {},
    onSuccess: () => {},
    onFailure: () => {},
    cancelToken: null,
  };
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  const {
    url, data, onSuccess, method, onFailure, cancelToken,
  } = { ...defaults, ...params };
  const dataOrParams = ['GET', 'DELETE'].includes(method.toUpperCase()) ? 'params' : 'data';

  window.axios
    .request({
      url: absoluteUrl(url),
      method,
      headers,
      // [dataOrParams]: dataOrParams == "params" ? qs.stringify(data) : data,
      [dataOrParams]: data,
      cancelToken,
    })
    .then((result) => onSuccess(result.data))
    .catch((error) => {
      onFailure(error);
    });
}

export function hasRole(user, role) {
  const stateUser = user;
  if (role && (stateUser.role_list ?? []).includes(role)) {
    return true;
  }
  return false;
}

export function hasStrictPermission(user, perm) {
  const stateUser = user;
  if (perm && !(stateUser.permission_list ?? []).includes(perm)) {
    return false;
  }
  return true;
}

export function hasPermission(user, perm) {
  const stateUser = user;
  if (perm && perm.startsWith('special_')) {
    switch (perm.substring(8)) {
      case 'guests_only':
        return !(user.id > 0);
      case 'users_only':
        return user.id > 0;
      default:
        return false;
    }
  }
  if (hasRole(user, 'admin')) {
    return true;
  }
  if (perm && !(stateUser.permission_list ?? []).includes(perm)) {
    return false;
  }
  return true;
}

export const isRouteAllowed = (user, location, protectedRoutes) => {
  const protectedRoutesArray = isArray(protectedRoutes) ? protectedRoutes : [protectedRoutes];
  const protRoute = find(protectedRoutesArray, (r) => r.path === location.pathname);
  if (protRoute) {
    return hasPermission(user, protRoute.perm);
  }
  return true;
};
