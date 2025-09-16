import React from "react";
import ShinyText from './ShinyText';

import './Main.css'

const Main = () => {
  return (
    <div className="image-wrapper">
      <img
        src="https://images.unsplash.com/photo-1724426057815-a12b34f027c1?q=80&w=816&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Placeholder"
        className="main-image"
      />
      <ShinyText
        text=" Where Flavor Meets Comfort"
        disabled={false}
        speed={3}
        className="big-shiny-text"
      />
    </div>
  );
};

export default Main;



 
