import { PropTypes } from 'prop-types';
import React, { lazy, Suspense } from 'react';
import { objectValues } from '../../utility';

const LayoutOneColumn = lazy(() => import('./LayoutOneColumn'));
const LayoutTopFooter = lazy(() => import('./LayoutTopFooter'));
const LayoutFilterElements = lazy(() => import('./LayoutFilterElements'));

export const LayoutType = {
  TopFooter: 'TopFooter',
  OneColumn: 'OneColumn',
  FilterElements: 'FilterElements',
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
        [LayoutType.FilterElements]: (
          <LayoutFilterElements>{children}</LayoutFilterElements>
        ),
      }[type]}
    </Suspense>
  );
};

Layout.propTypes = {
  type: PropTypes.oneOf(objectValues(LayoutType)).isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
