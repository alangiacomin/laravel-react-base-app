import React from 'react';
import { Redirect } from 'react-router-dom';
import routes from '../config/routes';
import Error from '../pagine/Error';

export function renderUnauthorized() {
  return <Error errorCode={403} />;
}

export function renderNotFound() {
  return <Error errorCode={404} />;
}

export function redirectLogin(referrer) {
  return <Redirect to={{ pathname: routes.login.to, state: { referrer } }} />;
}
