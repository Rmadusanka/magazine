import React, { Component } from 'react';

import './TeamArticle.scss';

export default class TeamArticle extends Component {
    render() {
        return (
            <div className="team-article-page">
                <div className="top-spacer"></div>
                <div className="page-container">
                    <div className="page-title">{this.props.pageTitle}</div>

                </div>
            </div>
        )
    }
}
