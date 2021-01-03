import React, { lazy } from 'react';
import Layout from '../../components/Layout';
import { LayoutType } from '../../components/Layout/Layout';
import SuspensePageLoading from '../../components/Suspense/SuspensePageLoading';
import { setDocumentTitle } from '../../utility';

const Pagina = lazy(() => import('./Pagina'));

const PaginaPage = (props) => {
  setDocumentTitle('Pagina');
  return (
    <Layout type={LayoutType.OneColumn}>
      <SuspensePageLoading>
        <Pagina {...props} />
      </SuspensePageLoading>
    </Layout>
  );
};

export default PaginaPage;
