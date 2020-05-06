import React, { Component } from 'react'

import './IdeaCart.scss';

export default class IdeaCart extends Component {
    render() {
        return (
            <div className="idea-cart-page">
                <div className="top-spacer"></div>
                <div className="page-container">
                    <div className="page-title">{this.props.pageTitle}</div>

                </div>
            </div>
        )
    }
}
