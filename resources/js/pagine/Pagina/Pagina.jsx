import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useLocation, useRouteMatch } from 'react-router-dom';
import { hasPermission, setDocumentTitle } from '../../common/utility';
import PaginaComponent from './PaginaComponent';
import { redirectLogin, renderUnauthorized } from '../../common/renderHelpers';

const pageActions = {
  edit: {
    id: 'edit',
    perm: 'edit_page_data',
  },
};

const getRouteAction = (routeMatch) => {
  if (!routeMatch || !routeMatch.params) return '';
  return routeMatch.params.action ?? '';
};

const actionAllowed = (user, pageAction, routeAction) => {
  if (pageAction.id !== routeAction) {
    return true;
  }
  return hasPermission(user, pageAction.perm);
};

const Pagina = (props) => {
  const { user } = props;
  const location = useLocation();
  const action = getRouteAction(useRouteMatch({ path: '/:route/:action/' }));
  if (!actionAllowed(user, pageActions.edit, action)) {
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
      canEdit={hasPermission(user, pageActions.edit.perm)}
      editMode={pageActions.edit.id === action}
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
