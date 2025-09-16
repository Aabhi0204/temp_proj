import React from 'react' 
import FooterButtonsDarkExample from '../Components/Footer';

const  Contact = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, padding: "2rem" }}>
        <h2>Contact Page</h2>
      </div>
      <FooterButtonsDarkExample />
    </div>
  );
};

export default Contact;
