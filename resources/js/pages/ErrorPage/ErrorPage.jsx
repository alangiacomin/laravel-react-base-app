import React, { lazy } from 'react';
import { setDocumentTitle } from '../../common/utility';
import Layout, { LayoutType } from '../../components/Layout/Layout';
import SuspensePageLoading from '../../components/Suspense/SuspensePageLoading';

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
