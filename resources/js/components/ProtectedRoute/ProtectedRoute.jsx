import React, { } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProtectedRouteComponent from './ProtectedRouteComponent';

const ProtectedRoute = (props) => (<ProtectedRouteComponent {...props} />);

const mapStateToProps = (state) => ({
  user: state.user,
  router: state.router,
});

export default withRouter(connect(mapStateToProps)(ProtectedRoute));
