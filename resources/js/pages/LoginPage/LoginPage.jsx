import React, { lazy } from 'react';
import { setDocumentTitle } from '../../common/utility';
import Layout from '../../components/Layout';
import { LayoutType } from '../../components/Layout/Layout';
import SuspensePageLoading from '../../components/Suspense/SuspensePageLoading';

const Login = lazy(() => import('../../components/Login'));

const LoginPage = (props) => {
  setDocumentTitle();
  return (
    <Layout type={LayoutType.OneColumn}>
      <SuspensePageLoading>
        <Login {...props} />
      </SuspensePageLoading>
    </Layout>
  );
};

export default LoginPage;
