import { PropTypes } from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { hasPermission } from '../../../utility';
import TopNavbarItemComponent from './TopNavbarItemComponent';

const TopNavbarItem = (props) => {
  const { user, route } = props;
  const { t } = useTranslation('routes');

  if (!hasPermission(user, route.perm)) {
    return null;
  }
  const title = t(route.title);
  return (<TopNavbarItemComponent {...route} title={title} />);
};

TopNavbarItem.propTypes = {
  user: PropTypes.shape({}),
  route: PropTypes.shape({
    to: PropTypes.string,
    exact: PropTypes.bool,
    isActive: PropTypes.func,
    title: PropTypes.string,
    perm: PropTypes.string,
  }).isRequired,
};

TopNavbarItem.defaultProps = {
  user: {},
};

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

export default connect(mapStateToProps)(TopNavbarItem);
// export default withRouter(connect(mapStateToProps)(TopNavbarItem));
