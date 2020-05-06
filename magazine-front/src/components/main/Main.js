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

// Images
import logo from '../../assets/images/color-logo-white-background.svg';
import closeMenu from '../../assets/images/icons/close.svg';

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

const titleList = {
    home: "Home",
    chairmanAndCEO: "Chairman And CEO",
    teamArticles: "Team Articles",
    milestone: "Epic Milestone",
    extraMiler: "Extra Miler",
    projectHighlights: "Project Highlights",
    creatives: "Creatives",
    ideaCart: "Idea Cart",
};

// let toggleHamburgerMenu = true;

// function toggleMenu() {
//     toggleHamburgerMenu = !toggleHamburgerMenu;
//     console.log(toggleHamburgerMenu);
// }

function Main() {


    const [visibleSection, setVisibleSection] = useState();
    let [toggleLeftMenu, setToggleLeftMenu] = useState(false);
    let [hideSplash, setHideSplash] = React.useState(false);
    let [runAnimation, setRunAnimation] = React.useState(false);
    let [readyToHide, setReadyToHide] = React.useState(false);



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

    function toggleMenu() {
        toggleLeftMenu = !toggleLeftMenu;
        setToggleLeftMenu(toggleLeftMenu)
    };

    useEffect(() => {
        setTimeout(function () {
            setHideSplash(true);
        }, 3500);

        setTimeout(function () {
            setRunAnimation(true);
        }, 0);

        setTimeout(function () {
            setReadyToHide(true);
        }, 2500);

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
        <>
            <div className={`splash ${readyToHide ? "blur-out-expand-fwd" : ""} ${hideSplash ? "hide" : ""}`}>
                <div className={`splash-logo ${runAnimation ? "show" : ""}`}>
                    <img src={logo} />
                </div>
            </div>
            <div className="main-page">
                <Header toggle={toggleMenu} />
                <div className="mn-container">
                    <div className="mn-left-content">
                        <div className="mn-section-header">
                            <div className={`mn-section-decs ${
                                visibleSection === "homeSection" ? "active" : ""
                                }`}>
                                <div className="mn-left-title" href="#homeSection">{titleList.home}</div>
                            </div>
                            <div className={`mn-section-decs ${
                                visibleSection === "ccSection" ? "active" : ""
                                }`}>
                                <div className="mn-left-title" href="#ccSection">{titleList.chairmanAndCEO}</div>
                            </div>
                            <div className={`mn-section-decs ${
                                visibleSection === "taSection" ? "active" : ""
                                }`}>
                                <div className="mn-left-title" href="#taSection">{titleList.teamArticles}</div>
                            </div>
                            <div className={`mn-section-decs ${
                                visibleSection === "msSection" ? "active" : ""
                                }`}>
                                <div className="mn-left-title" href="#msSection">{titleList.milestone}</div>
                            </div>
                            <div className={`mn-section-decs ${
                                visibleSection === "emSection" ? "active" : ""
                                }`}>
                                <div className="mn-left-title" href="#emSection">{titleList.extraMiler}</div>
                            </div>
                            <div className={`mn-section-decs ${
                                visibleSection === "phSection" ? "active" : ""
                                }`}>
                                <div className="mn-left-title" href="#phSection">{titleList.projectHighlights}</div>
                            </div>
                            <div className={`mn-section-decs ${
                                visibleSection === "portfolioSection" ? "active" : ""
                                }`}>
                                <div className="mn-left-title" href="#portfolioSection">{titleList.creatives}</div>
                            </div>
                            <div className={`mn-section-decs ${
                                visibleSection === "icSection" ? "active" : ""
                                }`}>
                                <div className="mn-left-title" href="#icSection">{titleList.ideaCart}</div>
                            </div>
                        </div>
                    </div>

                    <div className="mn-center-content">
                        <div id="homeSection" ref={homeSectionRef} className="home-section">
                            <Home pageTitle={titleList.home} />
                        </div>
                        <div id="ccSection" ref={ccSectionRef} className="cc-section">
                            <ChairmanAndCEO pageTitle={titleList.chairmanAndCEO} />
                        </div>
                        <div id="taSection" ref={taSectionRef} className="ta-section">
                            <TeamArticle pageTitle={titleList.teamArticles} />
                        </div>
                        <div id="msSection" ref={msSectionRef} className="ms-section">
                            <Milestone pageTitle={titleList.milestone} />
                        </div>
                        <div id="emSection" ref={emSectionRef} className="em-section">
                            <ExtraMiler pageTitle={titleList.extraMiler} />
                        </div>
                        <div id="phSection" ref={phSectionRef} className="ph-section">
                            <ProjectHighlight pageTitle={titleList.projectHighlights} />
                        </div>
                        <div id="portfolioSection" ref={portfolioSectionRef} className="portfolio-section">
                            <Portfolio pageTitle={titleList.creatives} />
                        </div>
                        <div id="icSection" ref={icSectionRef} className="ic-section">
                            <IdeaCart pageTitle={titleList.ideaCart} />
                        </div>
                    </div>

                    <div className={`mn-right-content ${toggleLeftMenu ? "show" : ""}`} >
                        <div className="menu-header-actions">
                            <button onClick={toggleMenu}>
                                <img src={closeMenu} />
                            </button>
                        </div>
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
                                        {titleList.home}
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
                                        {titleList.chairmanAndCEO}
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
                                        {titleList.teamArticles}
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
                                        {titleList.milestone}
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
                                        {titleList.extraMiler}
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
                                        {titleList.projectHighlights}
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
                                        {titleList.creatives}
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
                                        {titleList.ideaCart}
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;