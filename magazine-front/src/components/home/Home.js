import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import ScrollMenu from 'react-horizontal-scrolling-menu';

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

// Horizontal scroll Item things start
// list of items
const list = [
    { name: 'item1' },
    { name: 'item2' },
    { name: 'item3' },
    { name: 'item4' },
    { name: 'item5' },
    { name: 'item6' },
    { name: 'item7' },
    { name: 'item8' },
    { name: 'item9' }
];

// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
    return (
        <div
            className="menu-item"
        >
            {text}
        </div>
    );
};

// All items component
// Important! add unique key
export const Menu = (list) => list.map(el => {
    const { name } = el;

    return (
        <MenuItem
            text={name}
            key={name}
        />
    );
});


const Arrow = ({ text, className }) => {
    return (
        <div
            className={className}
        >{text}</div>
    );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
// Horizontal scroll Item things end

export default class Home extends Component {
    state = {
        selected: 0
    };

    onSelect = key => {
        this.setState({ selected: key });
    }
    render() {
        const { selected } = this.state;
        // Create menu from items
        const menu = Menu(list, selected);

        return (
            <div className="home-page">
                <div className="top-spacer"></div>
                <div className="page-container">

                    {/* Slider start */}
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
                    {/* slider end */}

                    {/* Directer board message start */}
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
                    {/* director board message end */}

                    {/* Highlights start */}
                    <div className="highlights">
                        <div className="hl-title">
                            <span>Highlights</span>
                        </div>

                        <div className="scrolling-wrapper">
                            <ScrollMenu
                                data={menu}
                                arrowLeft={ArrowLeft}
                                arrowRight={ArrowRight}
                                selected={selected}
                                onSelect={this.onSelect}
                            />
                        </div>

                    </div>
                    {/* Highlights end */}
                </div>
            </div>
        )
    }
}
