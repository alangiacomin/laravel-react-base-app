import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import LayoutTopFooter from './LayoutTopFooter';
import LayoutOneColumn from './LayoutOneColumn';

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

// const mapStateToProps = () => ({
// });

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

export default withRouter(Layout);
