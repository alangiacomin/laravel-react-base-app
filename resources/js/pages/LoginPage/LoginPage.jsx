import React, { lazy } from 'react';
import Layout from '../../components/Layout';
import { LayoutType } from '../../components/Layout/Layout';
import SuspensePageLoading from '../../components/Suspense/SuspensePageLoading';
import { setDocumentTitle } from '../../utility';

const Login = lazy(() => import('./Login'));

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
