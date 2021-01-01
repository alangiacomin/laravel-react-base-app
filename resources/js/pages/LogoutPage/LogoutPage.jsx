import React, { lazy } from 'react';
import { setDocumentTitle } from '../../common/utility';
import Layout from '../../components/Layout';
import { LayoutType } from '../../components/Layout/Layout';
import SuspensePageLoading from '../../components/Suspense/SuspensePageLoading';

const Logout = lazy(() => import('../../components/Logout'));

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
