import React from 'react';
import { PropTypes } from 'prop-types';
import TopNavbar from '../../TopNavbar';
import Footer from '../../Footer';

const LayoutTopFooterComponent = (props) => {
  const { children } = props;
  return (
    <>
      <TopNavbar />
      {children}
      <Footer />
    </>
  );
};

LayoutTopFooterComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutTopFooterComponent;
