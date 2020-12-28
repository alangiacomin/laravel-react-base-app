import { values } from 'lodash';
import { PropTypes } from 'prop-types';
import React, { lazy, Suspense } from 'react';

const LayoutOneColumn = lazy(() => import('./LayoutOneColumn'));
const LayoutTopFooter = lazy(() => import('./LayoutTopFooter'));

export const LayoutType = {
  TopFooter: 'TopFooter',
  OneColumn: 'OneColumn',
};

const Layout = (props) => {
  const { type, children } = props;
  return (
    <Suspense fallback={null}>
      {{
        [LayoutType.TopFooter]: (
          <LayoutTopFooter>{children}</LayoutTopFooter>
        ),
        [LayoutType.OneColumn]: (
          <LayoutOneColumn>{children}</LayoutOneColumn>
        ),
      }[type]}
    </Suspense>
  );
};

Layout.propTypes = {
  type: PropTypes.oneOf(values(LayoutType)).isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
