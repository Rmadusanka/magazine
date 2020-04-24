import React, { useRef, useEffect, useState } from 'react';

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

const getDimensions = ele => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;

    return {
        height,
        offsetTop,
        offsetBottom
    };
};

const scrollTo = ele => {
    ele.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
};

function Main() {
    const [visibleSection, setVisibleSection] = useState();

    const headerRef = useRef(null);
    const homeSectionRef = useRef(null);
    const ccSectionRef = useRef(null);
    const taSectionRef = useRef(null);
    const msSectionRef = useRef(null);
    const emSectionRef = useRef(null);
    const phSectionRef = useRef(null);
    const portfolioSectionRef = useRef(null);
    const icSectionRef = useRef(null);

    const sectionRefs = [
        { section: "homeSection", ref: homeSectionRef },
        { section: "ccSection", ref: ccSectionRef },
        { section: "taSection", ref: taSectionRef },
        { section: "msSection", ref: msSectionRef },
        { section: "emSection", ref: emSectionRef },
        { section: "phSection", ref: phSectionRef },
        { section: "portfolioSection", ref: portfolioSectionRef },
        { section: "icSection", ref: icSectionRef }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const { height: headerHeight } = getDimensions(headerRef.current);
            const scrollPosition = window.scrollY + headerHeight;

            const selected = sectionRefs.find(({ section, ref }) => {
                const ele = ref.current;
                if (ele) {
                    const { offsetBottom, offsetTop } = getDimensions(ele);
                    return scrollPosition > offsetTop && scrollPosition < offsetBottom;
                }
            });

            if (selected && selected.section !== visibleSection) {
                setVisibleSection(selected.section);
            } else if (!selected && visibleSection) {
                setVisibleSection(undefined);
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [visibleSection]);

    return (
        <div className="main-page">
            <Header />
            <div className="mn-container">
                <div className="mn-left-content">
                    <div className="mn-section-header">
                        <div className={`mn-section-decs ${
                            visibleSection === "homeSection" ? "active" : ""
                            }`}>
                            <div className="mn-left-title" href="#homeSection">Home</div>
                        </div>
                        <div className={`mn-section-decs ${
                            visibleSection === "ccSection" ? "active" : ""
                            }`}>
                            <div className="mn-left-title" href="#ccSection">Chairman And CEO Message</div>
                        </div>
                        <div className={`mn-section-decs ${
                            visibleSection === "taSection" ? "active" : ""
                            }`}>
                            <div className="mn-left-title" href="#taSection">Team Article</div>
                        </div>
                        <div className={`mn-section-decs ${
                            visibleSection === "msSection" ? "active" : ""
                            }`}>
                            <div className="mn-left-title" href="#msSection">Epic Milestones</div>
                        </div>
                        <div className={`mn-section-decs ${
                            visibleSection === "emSection" ? "active" : ""
                            }`}>
                            <div className="mn-left-title" href="#emSection">Extra Miler</div>
                        </div>
                        <div className={`mn-section-decs ${
                            visibleSection === "phSection" ? "active" : ""
                            }`}>
                            <div className="mn-left-title" href="#phSection">Project Highlights</div>
                        </div>
                        <div className={`mn-section-decs ${
                            visibleSection === "portfolioSection" ? "active" : ""
                            }`}>
                            <div className="mn-left-title" href="#portfolioSection">Creatives</div>
                        </div>
                        <div className={`mn-section-decs ${
                            visibleSection === "icSection" ? "active" : ""
                            }`}>
                            <div className="mn-left-title" href="#icSection">Idea Cart</div>
                        </div>
                    </div>
                </div>

                <div className="mn-center-content">
                    <div id="homeSection" ref={homeSectionRef} className="home-section">
                        <Home />
                    </div>
                    <div id="ccSection" ref={ccSectionRef} className="cc-section">
                        <ChairmanAndCEO />
                    </div>
                    <div id="taSection" ref={taSectionRef} className="ta-section">
                        <TeamArticle />
                    </div>
                    <div id="msSection" ref={msSectionRef} className="ms-section">
                        <Milestone />
                    </div>
                    <div id="emSection" ref={emSectionRef} className="em-section">
                        <ExtraMiler />
                    </div>
                    <div id="phSection" ref={phSectionRef} className="ph-section">
                        <ProjectHighlight />
                    </div>
                    <div id="portfolioSection" ref={portfolioSectionRef} className="portfolio-section">
                        <Portfolio />
                    </div>
                    <div id="icSection" ref={icSectionRef} className="ic-section">
                        <IdeaCart />
                    </div>
                </div>

                <div className="mn-right-content">
                    <div className="navigation-menu">
                        <div className="navigation-menu-container" ref={headerRef}>
                            <div className={`navigation-menu-item ${
                                visibleSection === "homeSection" ? "active" : ""
                                }`}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        scrollTo(homeSectionRef.current);
                                    }}>
                                    Home
                                </button>
                            </div>
                            <div className={`navigation-menu-item ${
                                visibleSection === "ccSection" ? "active" : ""
                                }`}>
                                <button
                                    type="button"

                                    onClick={() => {
                                        scrollTo(ccSectionRef.current);
                                    }}>
                                    Chairman And CEO
                                </button>
                            </div>
                            <div className={`navigation-menu-item ${
                                visibleSection === "taSection" ? "active" : ""
                                }`}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        scrollTo(taSectionRef.current);
                                    }}>
                                    Team Article
                                </button>
                            </div>
                            <div className={`navigation-menu-item ${
                                visibleSection === "msSection" ? "active" : ""
                                }`}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        scrollTo(msSectionRef.current);
                                    }}>
                                    Epic Milestones
                                </button>
                            </div>
                            <div className={`navigation-menu-item ${
                                visibleSection === "emSection" ? "active" : ""
                                }`}>
                                <button
                                    type="button"

                                    onClick={() => {
                                        scrollTo(emSectionRef.current);
                                    }}>
                                    Extra Miler
                                </button>
                            </div>
                            <div className={`navigation-menu-item ${
                                visibleSection === "phSection" ? "active" : ""
                                }`}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        scrollTo(phSectionRef.current);
                                    }}>
                                    Project Highlights
                                </button>
                            </div>
                            <div className={`navigation-menu-item ${
                                visibleSection === "portfolioSection" ? "active" : ""
                                }`}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        scrollTo(portfolioSectionRef.current);
                                    }}>
                                    Creatives
                                </button>
                            </div>
                            <div className={`navigation-menu-item ${
                                visibleSection === "icSection" ? "active" : ""
                                }`}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        scrollTo(icSectionRef.current);
                                    }}>
                                    Idea Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;