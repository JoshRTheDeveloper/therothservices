import React from 'react';
import './hero.css';


const Hero: React.FC = () => {
    return (
        <div className='main-background'>
        <div className='main-container'> 
         <div className='split'>
          <div>
          <h1 className='primary-h1'>Affordable </h1>
          <h1 className='primary-h2'>Web Services </h1>
          <p>Using AWS (Amazon Web Services)</p>
          <p>Simple websites or full stack applications</p>
          </div>
         </div>
        </div>
        </div>

    );
};

export default Hero; // Ensure the export matches the component name
