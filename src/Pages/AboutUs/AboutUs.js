import React from 'react';
import aboutLogo from '../../images/159759559_732907254091107_8228210713734617701_n.jpg'
import './AboutUs.css'

// About Us components About us js file


const AboutUs = () => {
    return (
        <div>

            <div className="about-container">
                <div>
                    <h1>About Us</h1>
                    <p>Chittagong officially known as Chattogram is a major coastal seaport city and financial center in southeastern Bangladesh. The city has a population of 4.5 million, making it the second largest city in the country. After achieving the independence in 1971, the health sector of Bangladesh required a drastic improvement in health care services. Today Max Hospital and diagnostics limited is one of the leading hospitals in Bangladesh improving and providing healthcare services kind-heartedly and the safest way possible.Located at the heart of Chattogram, city, Max Hospital and Diagnostics limited have started out its journey in September 2015 with an aim to provide the best healthcare services in the port city of Chittagong. This Healthcare facility is formed by the merge of the best doctors in the city with the aim of giving quality health care services to the society. Max Hospital and Diagnostic limited make great efforts for continuous quality improvement and comply with international standards to implement quality systems and maintain the quality services under international standards. Max Hospital and Diagnostics limited combines the use of the latest medical technology and highly specialized doctors in order to provide high-quality treatment to all our patients. We always tend to keep our Patient’s health as our Priority.As a responsible corporate citizen, Max Hospital takes the spirit of leadership well beyond business, and it has embraced the responsibility of keeping Bangladesh healthy by setting free Medical Camps at a different time of the year.</p>
                </div>
                <div>
                    <img width="400px" className="mt-5" src={aboutLogo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;