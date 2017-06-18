import React from 'react';

import SearchBar from './splashScreenComponents/searchBar';
import Cities from './splashScreenComponents/cities';
import Footer from './footer';

const SplashScreen = () => (
  <div className='splash-page'>
    <div className='splash-image-container'>
      <div className='splash-image'>
        <div className='splash-image-greeting'>
          <div id='splash-image-title'>MEET HERE</div>
          <div id='splash-image-subtitle'>Find tenants from 191+ countries and experience diversity in a whole new way.</div>
        </div>
        <SearchBar/>
      </div>
    </div>
    <Cities/>
    <Footer/>
  </div>
);

export default SplashScreen;
