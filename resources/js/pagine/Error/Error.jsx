import { PropTypes } from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { setDocumentTitle } from '../../common/utility';
import ErrorComponent from './ErrorComponent';

const Error = (props) => {
  setDocumentTitle('Error');
  const { errorCode } = props;
  const getDescription = (code) => {
    switch (code) {
      case 403:
        return 'Non Autorizzato';
      case 404:
        return 'Pagina non trovata';
      default:
        return 'Errore non definito';
    }
  };
  return (<ErrorComponent descError={getDescription(errorCode)} />);
};

const mapStateToProps = (state) => ({});

Error.propTypes = {
  errorCode: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Error);
