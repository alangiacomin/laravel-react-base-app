import React, { } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ProtectedRouteComponent from './ProtectedRouteComponent';

const ProtectedRoute = (props) => (<ProtectedRouteComponent {...props} />);

const mapStateToProps = (state) => ({
  user: state.user,
});

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

export default withRouter(connect(mapStateToProps)(ProtectedRoute));
