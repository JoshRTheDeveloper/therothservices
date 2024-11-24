import React from 'react';
import './pricing.css';


const Pricing: React.FC = () => {
    return (
        <div className='pricing-main-container'> 
        <h2>Our Services </h2>
        <div className='three-split'>
        <div >
          <div>
            <h3> Frontend</h3>
          <p>
          Creating the parts of the website that people see and use, making sure everything looks good and works smoothly on all devices.
         </p>
          </div>
         </div>
         <div >
         <h3> Backend</h3>
         <p>
         Developing the parts of the website that handle data, like logging in or storing information, and ensuring everything runs securely and efficiently.
         </p>
         </div>
         <div >
         <h3>Database</h3>
            <p>    Organizing and handling all the information your website needs, like user accounts or product details, so it’s easily accessible and safe.</p>
         </div>
        </div>
      
        </div>
    );
};

export default Pricing; 
