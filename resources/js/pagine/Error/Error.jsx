import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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

// const mapDispatchToProps = (dispatch) => ({
//   aggiornaComuneNascita: (comune = {}) => dispatch(
//     setDatiQuadro({
//       RichiedenteDatiAnagraficiProvinciaDiNascita: comune.CodiceProvincia,
//       RichiedenteDatiAnagraficiStatoDiNascita: comune.DescrizioneStato,
//       RichiedenteDatiAnagraficiCodiceComuneDiNascita: comune.CodiceComune,
//       RichiedenteDatiAnagraficiComuneDiNascita: comune.Descrizione,
//     }),
//   ),
// });

Error.propTypes = {
  errorCode: PropTypes.number.isRequired,
};

export default withRouter(connect(mapStateToProps)(Error));
