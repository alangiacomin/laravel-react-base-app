import {
  find, isArray,
} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { redirectLogin, renderUnauthorized } from '../../common/renderHelpers';
import { hasPermission, setDocumentTitle } from '../../common/utility';
import routes from '../../config/routes';
import PaginaComponent from './PaginaComponent';

const isRouteAllowed = (user, location, protectedRoutes) => {
  const protectedRoutesArray = isArray(protectedRoutes) ? protectedRoutes : [protectedRoutes];
  const protRoute = find(protectedRoutesArray, (r) => r.path === location.pathname);
  if (protRoute) {
    return hasPermission(user, protRoute.perm);
  }
  return true;
};

const Pagina = (props) => {
  const { user } = props;
  const location = useLocation();
  if (!isRouteAllowed(user, location, [routes.pagina_edit])) {
    return user.id ? renderUnauthorized() : redirectLogin(location.pathname);
  }
  setDocumentTitle('Pagina');
  const sottotitolo = 'Qui Sottotitolo';
  const titolo = 'QUI TITOLO';
  const contenuti = 'Altri contenuti';
  return (
    <PaginaComponent
      sottotitolo={sottotitolo}
      titolo={titolo}
      contenuti={contenuti}
      canEdit={hasPermission(user, routes.pagina_edit.perm)}
      editMode={routes.pagina_edit.path === location.pathname}
    />
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

Pagina.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object,
};

Pagina.defaultProps = {
  user: {},
};

export default connect(mapStateToProps)(Pagina);
