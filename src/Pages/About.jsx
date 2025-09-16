import React from 'react';

import FooterButtonsDarkExample from '../Components/Footer';

const About = () => (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <div style={{ flex: 1, padding: '2rem' }}>
      <h2>About Page</h2>
      <p>This is the About page.</p>
    </div>
    <FooterButtonsDarkExample />
  </div>
);

export default About;
