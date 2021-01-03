import { ConnectedRouter } from 'connected-react-router';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { renderNotFound } from './common/renderHelpers';
import routes from './config/routes';
import { history } from './configureStore';
import ErrorBoundary from './components/ErrorBoundary';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components-ui/ScrollToTop';

const App = (props) => {
  const { store } = props;
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ScrollToTop />
        <Switch>
          {Object
            .entries(routes)
            .map(([key, route]) => (route.component ? <ProtectedRoute key={key} {...route} /> : null))}
          <ErrorBoundary>
            <Route path="*">
              {renderNotFound()}
            </Route>
          </ErrorBoundary>
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
};

export default App;
