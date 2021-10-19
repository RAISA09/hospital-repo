import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import image1 from '../../../images/portrait-smiling2-male-doctor.jpg'
import image2 from '../../../images/rsz_1young-handsome-physician-medical-robe-with-stethoscope.jpg'
import image3 from '../../../images/rsz_doctor-with-co-workers-analyzing-x-ray.jpg'


// banner js file

const Banner = () => {
    return (
        <div className="my-5">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="slider-1">Healthy Life</h3>
                        <p className="slider-1">To keep the body healthy, you have to take regular balanced diet.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="slider-2">Healthy Smile Happy life</h3>
                        <p className="slider-2">Your will have a happy life if your body is healthy</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="slider-3">Good Health</h3>
                        <p className="slider-3">Treatment is not solution for better life</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;