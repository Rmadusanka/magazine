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
                <div className="idea-cart-container">
                    <div className="idea-cart-title">{this.props.pageTitle}</div>
                    <div className="idea-cart-logo">
                        <img src={ideaCartLogo} />
                    </div>
                </div>
            </div>
        )
    }
}
