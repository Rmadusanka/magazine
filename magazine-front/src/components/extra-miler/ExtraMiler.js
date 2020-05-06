import React, { Component } from 'react'

import './ExtraMiler.scss';

export default class ExtraMiler extends Component {
    render() {
        return (
            <div className="extra-miler-page">
                <div className="top-spacer"></div>
                <div className="page-container">
                    <div className="page-title">{this.props.pageTitle}</div>

                </div>
            </div>
        )
    }
}
