import React, { lazy } from 'react';
import Layout from '../../components/Layout';
import { LayoutType } from '../../components/Layout/Layout';
import SuspensePageLoading from '../../components/Suspense/SuspensePageLoading';
import { setDocumentTitle } from '../../utility';

const Logout = lazy(() => import('./Logout'));

const LogoutPage = (props) => {
  setDocumentTitle();
  return (
    <Layout type={LayoutType.OneColumn}>
      <SuspensePageLoading>
        <Logout {...props} />
      </SuspensePageLoading>
    </Layout>
  );
};

export default LogoutPage;
