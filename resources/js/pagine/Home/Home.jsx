import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setDocumentTitle } from '../../common/utility';
import HomeComponent from './HomeComponent';

const Home = (props) => {
  setDocumentTitle();
  const testo = 'qui testo';
  return (<HomeComponent testo={testo} />);
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

export default withRouter(connect(mapStateToProps)(Home));
