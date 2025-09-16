import React from 'react';

import FooterButtonsDarkExample from '../Components/Footer';

const Service = () => (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <div style={{ flex: 1, padding: '2rem' }}>
      <h2>Service Page</h2>
      <p>Our services are listed here.</p>
    </div>
    <FooterButtonsDarkExample />
  </div>
);

export default Service;
