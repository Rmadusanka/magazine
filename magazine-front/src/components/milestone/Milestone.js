import React, { Component } from 'react';

import './Milestone.scss';

export default class Milestone extends Component {
    render() {
        return (
            <div className="milestone-page">
                <div className="top-spacer"></div>
                <div className="page-container">
                    <div className="page-title">{this.props.pageTitle}</div>

                </div>
            </div>
        )
    }
}
