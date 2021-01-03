import React, { lazy } from 'react';
import Layout, { LayoutType } from '../../components/Layout/Layout';
import SuspensePageLoading from '../../components/Suspense/SuspensePageLoading';
import { setDocumentTitle } from '../../utility';

const Error = lazy(() => import('../../components/Error'));

const ErrorPage = (props) => {
  setDocumentTitle();
  return (
    <Layout type={LayoutType.OneColumn}>
      <SuspensePageLoading>
        <Error {...props} />
      </SuspensePageLoading>
    </Layout>
  );
};

export default ErrorPage;
