import React, { Component } from 'react'

import './Portfolio.scss';

export default class Portfolio extends Component {
    render() {
        return (
            <div className="porfolio-page" >
                <div className="top-spacer"></div>
                <div className="page-container">
                    <div className="page-title">{this.props.pageTitle}</div>

                </div>
            </div>
        )
    }
}
