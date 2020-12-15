import React from 'react';
import { PropTypes } from 'prop-types';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import ScrollToTop from '../ScrollToTop';
import ProtectedRoute from '../ProtectedRoute';
import ErrorBoundary from '../ErrorBoundary';
import { history } from '../../configureStore';
import routesWithComponents from '../../config/routesWithComponents';
import Error from '../../pagine/Error';

const App = (props) => {
  const { store } = props;
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ScrollToTop />
        <Switch>
          {Object
            .entries(routesWithComponents)
            .map(([key, route]) => (route.component ? <ProtectedRoute key={key} {...route} /> : null))}
          <ErrorBoundary>
            <Route path="*">
              <Error errorCode={404} />
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

const mapStateToProps = () => ({});

// const mapDispatchToProps = (dispatch) => ({
//   aggiornaComuneNascita: (comune = {}) => dispatch(
//     setDatiQuadro({
//       RichiedenteDatiAnagraficiProvinciaDiNascita: comune.CodiceProvincia,
//       RichiedenteDatiAnagraficiStatoDiNascita: comune.DescrizioneStato,
//       RichiedenteDatiAnagraficiCodiceComuneDiNascita: comune.CodiceComune,
//       RichiedenteDatiAnagraficiComuneDiNascita: comune.Descrizione,
//     }),
//   ),
// });

export default App;
// export default connect(mapStateToProps)(App);
