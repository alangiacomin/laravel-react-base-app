import PropTypes from 'prop-types';
import React, { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { redirectLogin, renderUnauthorized } from '../../common/renderHelpers';
import { hasPermission, isRouteAllowed, setDocumentTitle } from '../../common/utility';
import Layout from '../../components/Layout';
import { LayoutType } from '../../components/Layout/Layout';
import routes from '../../config/routes';

// import PaginaComponent from './PaginaComponent';

const PaginaComponent = lazy(() => import('./PaginaComponent'));

const Pagina = (props) => {
  const { user } = props;
  const location = useLocation();
  const { t } = useTranslation('pagina');
  if (!isRouteAllowed(user, location, [routes.pagina_edit])) {
    return user.id ? renderUnauthorized() : redirectLogin(location.pathname);
  }
  setDocumentTitle('Pagina');
  const sottotitolo = t('subtitle');
  const titolo = t('title');
  const contenuti = t('content');
  return (
    <Layout type={LayoutType.OneColumn}>
      <Suspense fallback={null}>
        <PaginaComponent
          sottotitolo={sottotitolo}
          titolo={titolo}
          contenuti={contenuti}
          canEdit={hasPermission(user, routes.pagina_edit.perm)}
          editMode={routes.pagina_edit.path === location.pathname}
        />
      </Suspense>
    </Layout>
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
