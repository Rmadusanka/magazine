import React, { Component } from 'react'

//CSS Styles
import './IdeaCart.scss';

// Images
import ideaCartLogo from '../../assets/images/ideacart/idea-cart-logo.svg';

export default class IdeaCart extends Component {
    render() {
        return (
            <div className="idea-cart-page">
                <div className="top-spacer"></div>
                <div className="page-container">
                    <div className="page-title">{this.props.pageTitle}</div>
                    <div className="idea-cart-container">
                        <div className="idea-cart-logo">
                            <img src={ideaCartLogo} />
                        </div>
                        <div className="idea-cart-description">
                            Let’s stand out and make change!<br /><br />
                            We are open to new ideas and suggestions for process improvement of,<br /><br />
                            <ul>
                                <li>HR related</li>
                                <li>Product related</li>
                                <li>General processes</li>
                                <li>We would like to know if you have any compaints as well.</li>
                            </ul>
                            Do you have a great idea in your mind?<br />
                            One click away to shine in Epic
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
