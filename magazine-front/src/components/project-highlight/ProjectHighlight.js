import React, { Component } from 'react';

import './ProjectHighlight.scss';

export default class ProjectHighlight extends Component {
    render() {
        return (
            <div className="project-highlight-page">
                <div className="top-spacer"></div>
                <div className="page-container">
                    <div className="page-title">{this.props.pageTitle}</div>

                </div>
            </div>
        )
    }
}
