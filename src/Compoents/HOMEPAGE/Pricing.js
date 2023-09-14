import React from 'react';
import './Pricing.css'
const Pricing = () => {
    return (
        <div className='Pricing'>
            <h1>Pricing</h1>
            <div className='Pric_Line'></div>
            <div className='Pricing_container'>
                <div className='Hourly'> 
                <div>
                    <h2>Hourly</h2>
                </div>
                <h6>3 Hours  199</h6>
                <h6>5 Hours  249</h6>
                <h6>7 Hours  279</h6>
                <h6>24Hours  399</h6>


             </div>
             <div className='Hourly'> 
                <div>
                    <h2>Day And Montly</h2>
                </div>
                <h6>1 Day  199</h6>
                <h6>7 Day  1299</h6>
                <h6>15 Day 2799</h6>
                <h6>1 Month 5799</h6>


             </div>
           
            </div>
        </div>
    );
}

export default Pricing;
