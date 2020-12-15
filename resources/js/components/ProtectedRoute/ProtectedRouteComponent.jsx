import React from 'react';
import { PropTypes } from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import Error from '../../pagine/Error';
import ErrorBoundary from '../ErrorBoundary';
import { hasPermission } from '../../common/utility';
import routes from '../../config/routes';

const ProtectedRouteComponent = (props) => {
  const { user, perm } = props;
  if (perm && !perm.startsWith('special_') && !hasPermission(user, perm)) {
    if (user.id) {
      return <Error errorCode={403} />;
    }
    return <Redirect to={routes.login.to} />;
  }
  if (perm && perm.startsWith('special_guests_only') && user.id) {
    return <Redirect to={routes.home.to} />;
  }
  return (
    <ErrorBoundary>
      <Route {...props} />
    </ErrorBoundary>
  );
};

ProtectedRouteComponent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object.isRequired,
  perm: PropTypes.string,
  // route: PropTypes.shape({
  //   to: PropTypes.string,
  //   exact: PropTypes.bool,
  //   isActive: PropTypes.func,
  //   title: PropTypes.string,
  // }).isRequired,
};

ProtectedRouteComponent.defaultProps = {
  // user: {},
  perm: '',
};

export default ProtectedRouteComponent;
