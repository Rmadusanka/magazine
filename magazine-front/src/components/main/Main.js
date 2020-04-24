import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy'

// CSS styles
import './Main.scss';

// Components
import Header from '../common/header/Header';
import Home from '../home/Home';
import ChairmanAndCEO from '../chairman-and-ceo/ChairmanAndCEO';
import ExtraMiler from '../extra-miler/ExtraMiler';
import IdeaCart from '../idea-cart/IdeaCart';
import Portfolio from '../portfolio/Portfolio';
import ProjectHighlight from '../project-highlight/ProjectHighlight';
import TeamArticle from '../team-article/TeamArticle';
import Milestone from '../milestone/Milestone';

export default class Main extends Component {

    render() {
        return (
            <div className="main-page">
                <div className="mn-header">
                    <Header />
                </div>
                <div className="mn-container">
                    <div className="mn-left-content">
                        <div className="mn-section-header">
                            <Scrollspy componentTag={'div'} items={['homeSection', 'ccSection', 'taSection', 'msSection', 'emSection', 'phSection', 'portfolioSection', 'icSection']} currentClassName="active">
                                <div className="mn-section-decs">
                                    <div className="mn-left-title" href="#homeSection">Home</div>
                                </div>
                                <div className="mn-section-decs">
                                    <div className="mn-left-title" href="#ccSection">Chairman And CEO Message</div>
                                </div>
                                <div className="mn-section-decs">
                                    <div className="mn-left-title" href="#taSection">Team Article</div>
                                </div>
                                <div className="mn-section-decs">
                                    <div className="mn-left-title" href="#msSection">Epic Milestones</div>
                                </div>
                                <div className="mn-section-decs">
                                    <div className="mn-left-title" href="#emSection">Extra Miler</div>
                                </div>
                                <div className="mn-section-decs">
                                    <div className="mn-left-title" href="#phSection">Project Highlights</div>
                                </div>
                                <div className="mn-section-decs">
                                    <div className="mn-left-title" href="#portfolioSection">Creatives</div>
                                </div>
                                <div className="mn-section-decs">
                                    <div className="mn-left-title" href="#icSection">Idea Cart</div>
                                </div>
                            </Scrollspy>
                        </div>
                    </div>

                    <div className="mn-center-content">
                        <div id="homeSection" className="home-section">
                            <Home />
                        </div>
                        <div id="ccSection" className="cc-section">
                            <ChairmanAndCEO />
                        </div>
                        <div id="taSection" className="ta-section">
                            <TeamArticle />
                        </div>
                        <div id="msSection" className="ms-section">
                            <Milestone />
                        </div>
                        <div id="emSection" className="em-section">
                            <ExtraMiler />
                        </div>
                        <div id="phSection" className="ph-section">
                            <ProjectHighlight />
                        </div>
                        <div id="portfolioSection" className="portfolio-section">
                            <Portfolio />
                        </div>
                        <div id="icSection" className="ic-section">
                            <IdeaCart />
                        </div>
                    </div>

                    <div className="mn-right-content">
                        <div className="navigation-menu">
                            <Scrollspy items={['homeSection', 'ccSection', 'taSection', 'msSection', 'emSection', 'phSection', 'portfolioSection', 'icSection']} currentClassName="active">
                                <li><a href="#homeSection">Home</a></li>
                                <li><a href="#ccSection">Chairman And CEO Message</a></li>
                                <li><a href="#taSection">Team Article</a></li>
                                <li><a href="#msSection">Epic Milestones</a></li>
                                <li><a href="#emSection">Extra Miler</a></li>
                                <li><a href="#phSection">Project Highlights</a></li>
                                <li><a href="#portfolioSection">Creatives</a></li>
                                <li><a href="#icSection">Idea Cart</a></li>
                            </Scrollspy>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}