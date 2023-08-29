import React from 'react';
import Header from './Header';
import MiddleInfo from './MiddleInfo';
import InfoBanner from './InfoBanner';
import Cards from '../Cards';
function Home() {
  return (
    <div>
      <Header />
      <InfoBanner />
      <MiddleInfo />
      <Cards />
    </div>
  );
}

export default Home;
