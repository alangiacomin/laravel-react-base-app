import React from 'react';
import { setDocumentTitle } from '../../common/utility';
import HomeComponent from './HomeComponent';

const Home = (props) => {
  setDocumentTitle();
  const testo = 'qui testo';
  return (<HomeComponent testo={testo} />);
};

export default Home;
// export default withRouter(connect(mapStateToProps)(Home));
