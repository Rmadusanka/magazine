import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';

// Styles
import './Home.scss';

// Slide images
import image1 from '../../assets/images/home/slider/1.png';

// images
import chairman from '../../assets/images/home/chairman.png';
import ceo from '../../assets/images/home/ceo.png';

const slideImages = [
    image1,
    image1,
    image1
];

const properties = {
    duration: 5000,
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
                                    <div className="title-container">
                                        <div className='slidet-title1'>Making History at DFCC</div>
                                        <div className='slidet-title2'>1st CMS in the nation</div>
                                        <div className='slidet-title3'>Build by YOU</div>
                                    </div>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div className="slide-image-container" style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                                    <div className="title-container">
                                        <div className='slidet-title1'>Making History at DFCC</div>
                                        <div className='slidet-title2'>1st CMS in the nation</div>
                                        <div className='slidet-title3'>Build by YOU</div>
                                    </div>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div className="slide-image-container" style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                                    <div className="title-container">
                                        <div className='slidet-title1'>Making History at DFCC</div>
                                        <div className='slidet-title2'>1st CMS in the nation</div>
                                        <div className='slidet-title3'>Build by YOU</div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    </div>

                    <div className="db-messages">
                        <div className="db-message-content">
                            <div className="text-content">
                                <div className="title">
                                    Message from <br />
                                    Chairman
                                </div>
                            </div>
                            <div className="image-content">
                                <img src={chairman} />
                            </div>
                        </div>
                        <div className="db-message-content">
                            <div className="text-content">
                                <div className="title">
                                    Message from <br />
                                    CEO
                                </div>
                            </div>
                            <div className="image-content">
                                <img src={ceo} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
