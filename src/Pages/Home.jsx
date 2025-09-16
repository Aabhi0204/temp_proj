

import React from 'react';
import Main from '../Components/Main';
import FooterButtonsDarkExample from '../Components/Footer';

const Home = () => (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <div style={{ flex: 1, padding: '2rem' }}>
      <Main />
    </div>
    <FooterButtonsDarkExample />
  </div>
);

export default Home;
