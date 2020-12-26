import React from 'react';
import { useTranslation } from 'react-i18next';
import { setDocumentTitle } from '../../common/utility';
import HomeComponent from './HomeComponent';

const Home = (props) => {
  setDocumentTitle();
  const { t } = useTranslation('home');
  return (<HomeComponent testo={t('home_testo')} />);
};

// const mapStateToProps = (state) => ({
//   user: state.user,
// });

export default Home;
// export default connect(mapStateToProps)(Home);
// export default withRouter(connect(mapStateToProps)(Home));
