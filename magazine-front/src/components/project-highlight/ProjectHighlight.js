import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import './ProjectHighlight.scss';

// projects images
import image1 from '../../assets/images/project-highlights/1.png';
import image2 from '../../assets/images/project-highlights/2.png';

// Horizontal scroll Item things start
// list of items
const list = [
    {
        title: 'NDB NEOS',
        imageUrl: image1,
        description: 'Online and Mobile Banking.',
        url: ''
    },
    {
        title: 'EPIC SURE',
        imageUrl: image2,
        description: 'First Time In Epic Insurance.',
        url: ''
    },
    {
        title: 'NTB MOBILE APP',
        imageUrl: image1,
        description: 'New Generation Interactive.',
        url: ''
    },
    {
        title: 'FineX',
        imageUrl: image2,
        description: 'Epic Corebank Solution Product.',
        url: ''
    }
];

// One item component
// selected prop will be passed
const CardItem = ({ text, imageUrl, description, selected }) => {
    return (
        <div className="menu-item">
            <div className="item-container">
                <div className='ph-card-image-container'>
                    <img src={imageUrl} draggable="false" />
                </div>
                <div className="text-content">
                    <div className="ph-card-description">
                        {description}
                    </div>
                    <div className="ph-card-title">
                        {text}
                    </div>
                </div>
            </div>
        </div>
    );
};

// All items component
// Important! add unique key
export const CardContainer = (list) => list.map(el => {
    const { title, imageUrl, description } = el;

    return (
        <CardItem
            text={title}
            imageUrl={imageUrl}
            description={description}
            key={title}
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

export default class ProjectHighlight extends Component {
    state = {
        selected: 0
    };

    onSelect = key => {
        this.setState({ selected: key });
    }
    render() {

        const { selected } = this.state;
        // Create menu from items
        const card = CardContainer(list, selected);

        return (
            <div className="project-highlight-page">
                <div className="top-spacer"></div>
                <div className="page-container">
                    <div className="page-title">{this.props.pageTitle}</div>

                    <div className="project-highlights-container">
                        <div className="scrolling-wrapper">
                            <ScrollMenu
                                alignCenter={false}
                                data={card}
                                selected={selected}
                                onSelect={this.onSelect}
                                scrollBy={0}
                                hideArrows={true}
                                translate={0}
                                wheel={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
