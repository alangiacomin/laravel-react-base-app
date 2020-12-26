import { values } from 'lodash';
import { PropTypes } from 'prop-types';
import React from 'react';
import LanguageSelectorButtons from './LanguageSelectorButtons';

export const LanguageSelectorType = {
  Buttons: 'Buttons',
};

const LanguageSelector = (props) => {
  const { type } = props;
  switch (type) {
    case LanguageSelectorType.Buttons: return (<LanguageSelectorButtons />);
    default: return null;
  }
};

LanguageSelector.propTypes = {
  type: PropTypes.oneOf(values(LanguageSelectorType)).isRequired,
};

export default LanguageSelector;
