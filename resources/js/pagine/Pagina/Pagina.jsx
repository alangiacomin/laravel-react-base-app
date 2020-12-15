import React from 'react';
// import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setDocumentTitle } from '../../common/utility';
import PaginaComponent from './PaginaComponent';

const Pagina = (props) => {
  setDocumentTitle('Pagina');
  const sottotitolo = 'Qui Sottotitolo';
  const titolo = 'QUI TITOLO';
  const contenuti = 'Altri contenuti';
  return (
    <PaginaComponent
      sottotitolo={sottotitolo}
      titolo={titolo}
      contenuti={contenuti}
    />
  );
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

export default withRouter(connect(mapStateToProps)(Pagina));
