import React, { Component } from 'react'

import './ChairmanAndCEO.scss';

export default class ChairmanAndCEO extends Component {
    render() {
        return (
            <div className="cc-message-page">
                <div className="top-spacer"></div>
                <div className="page-container">
                    <div className="page-title">{this.props.pageTitle}</div>

                </div>
            </div >
        )
    }
}
