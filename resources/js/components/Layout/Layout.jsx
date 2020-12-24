import { PropTypes } from 'prop-types';
import React from 'react';
import LayoutOneColumn from './LayoutOneColumn';
import LayoutTopFooter from './LayoutTopFooter';

export const LayoutType = {
  TopFooter: 'TopFooter',
  OneColumn: 'OneColumn',
};

const Layout = (props) => {
  const { type, children } = props;
  switch (type) {
    case LayoutType.TopFooter: return (<LayoutTopFooter>{children}</LayoutTopFooter>);
    case LayoutType.OneColumn: return (<LayoutOneColumn>{children}</LayoutOneColumn>);
    default: return null;
  }
};

Layout.propTypes = {
  type: PropTypes.oneOf(['TopFooter', 'OneColumn']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
