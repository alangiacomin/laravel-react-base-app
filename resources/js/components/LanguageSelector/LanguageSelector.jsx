import { values } from 'lodash';
import { PropTypes } from 'prop-types';
import React, { lazy, Suspense } from 'react';

const LanguageSelectorButtons = lazy(() => import('./LanguageSelectorButtons'));

export const LanguageSelectorType = {
  Buttons: 'Buttons',
};

const LanguageSelector = (props) => {
  const { type } = props;
  switch (type) {
    case LanguageSelectorType.Buttons: return (<Suspense fallback={null}><LanguageSelectorButtons /></Suspense>);
    default: return null;
  }
};

LanguageSelector.propTypes = {
  type: PropTypes.oneOf(values(LanguageSelectorType)).isRequired,
};

export default LanguageSelector;
