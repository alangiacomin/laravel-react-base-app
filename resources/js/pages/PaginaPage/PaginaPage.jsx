import React, { lazy } from 'react';
import { setDocumentTitle } from '../../common/utility';
import Layout from '../../components/Layout';
import { LayoutType } from '../../components/Layout/Layout';
import SuspensePageLoading from '../../components/Suspense/SuspensePageLoading';

const Pagina = lazy(() => import('../../components/Pagina'));

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
