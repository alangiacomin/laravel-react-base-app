import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const TopNavbarItemComponent = (props) => {
  const {
    to, exact, isActive, title,
  } = props;
  return (
    <>
      {(to || '').startsWith('http') ? (
        <a className="nav-link" href={to}>
          {title}
        </a>
      ) : (
        <NavLink
          className="nav-link"
          to={to}
          exact={exact}
          isActive={isActive}
        >
          {title}
        </NavLink>
      )}
    </>
  );
};

TopNavbarItemComponent.propTypes = {
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  isActive: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default TopNavbarItemComponent;
