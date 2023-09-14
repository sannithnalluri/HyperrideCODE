import React from 'react';
import './CustomerReview.css'

const CustomerReview = () => {
    return (
        <div className='Customer_review'>
            <h1>Customer Review</h1>
            <div className='Pric_Line'></div>
            <div className='Customer_Contianer'>
                <div className='Avatar'>
                    <div className='Avatorimg'>
                        <img src={require('../Assests/Avator.png')} alt='png'/>
                    </div>
                    <h3>Vinay</h3>
                    <div className='rating_section'>
                        <h4>Rating : 4.5</h4>
                        
                    </div>
                    <p>One of the best servies out in the
                    hyderabad.mantiance of the Bike is
                    very good.I felt happy to ride
                    with hyperride</p>
                </div>
                <div className='Avatar'>
                    <div className='Avatorimg'>
                        <img src={require('../Assests/Avator.png')} alt='png'/>
                    </div>
                    <h3>Vinay</h3>
                    <div className='rating_section'>
                        <h4>Rating : 4.5</h4>
        
                    </div>
                    <p>One of the best servies out in the
                    hyderabad.mantiance of the Bike is
                    very good.I felt happy to ride
                    with hyperride</p>
                </div>
                

            </div>
        </div>
    );
}

export default CustomerReview;
