import React, { lazy, Suspense } from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { setDocumentTitle } from '../../common/utility';
import Layout from '../../components/Layout';
import { LayoutType } from '../../components/Layout/Layout';
// import HomeComponent from './HomeComponent';

const HomeComponent = lazy(() => import('./HomeComponent'));

const Home = (props) => {
  setDocumentTitle();
  const { t } = useTranslation('home');
  return (
    <Layout type={LayoutType.TopFooter}>
      <Container>
        <Suspense fallback={null}>
          <HomeComponent testo={t('home_testo')} />
        </Suspense>
      </Container>
    </Layout>
  );
};

// const mapStateToProps = (state) => ({
//   user: state.user,
// });

export default Home;
// export default connect(mapStateToProps)(Home);
// export default withRouter(connect(mapStateToProps)(Home));
