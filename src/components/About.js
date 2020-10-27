import React from 'react';
import aboutImg from '../images/logo.png';

const About = () => {
    return (
        <div className="about">
            <div className="about-center">
                <div className="about-img">
                    <img src={aboutImg} alt="img"/>
                </div>

                <div className="about-details">
                    <p><b>C</b>clothes is a net store which has been created in oreder to provide you the best service and quality in the best price . It cooperates with many famous companies and provides all the benefits that you gain from this store. We are the only one who brings  clothes directly from factories.</p>
                </div>
                
            </div>   
        </div>
    )
}

export default About



