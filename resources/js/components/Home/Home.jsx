import React from 'react';
import { useTranslation } from 'react-i18next';
import SuspenseNull from '../Suspense/SuspenseNull';
import HomeComponent from './HomeComponent';

const Home = (props) => {
  const { t } = useTranslation('home');
  return (
    <SuspenseNull>
      <HomeComponent testo={t('home_testo')} />
    </SuspenseNull>
  );
};

export default Home;
