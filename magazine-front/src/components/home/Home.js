import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';

// Styles
import './Home.scss';

// Slide images
import image1 from '../../assets/images/carousel/1.png';

const slideImages = [
    image1,
    image1,
    image1
];

const properties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    onChange: (oldIndex, newIndex) => {
        // console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}

export default class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <div className="top-spacer"></div>
                <div className="page-container">
                    <div className="slide-container">
                        <Slide {...properties}>
                            <div className="each-slide">
                                <div className="slide-image-container" style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                                    <span>Slide 1</span>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div className="slide-image-container" style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                                    <span>Slide 2</span>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div className="slide-image-container" style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                                    <span>Slide 3</span>
                                </div>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
        )
    }
}
