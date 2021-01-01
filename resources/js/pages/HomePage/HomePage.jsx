import React, { lazy } from 'react';
import { Container } from 'react-bootstrap';
import { setDocumentTitle } from '../../common/utility';
import Layout from '../../components/Layout';
import { LayoutType } from '../../components/Layout/Layout';
import SuspensePageLoading from '../../components/Suspense/SuspensePageLoading';

const Home = lazy(() => import('../../components/Home'));

const HomePage = (props) => {
  setDocumentTitle();
  return (
    <Layout type={LayoutType.TopFooter}>
      <Container>
        <SuspensePageLoading>
          <Home {...props} />
        </SuspensePageLoading>
      </Container>
    </Layout>
  );
};

export default HomePage;
