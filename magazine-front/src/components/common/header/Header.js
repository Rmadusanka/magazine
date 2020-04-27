import React, { Component } from 'react'

// styles
import './Header.scss';

// images 
import logo from '../../../assets/images/color-logo-dark-background.svg';
import font from '../../../assets/images/icons/font-size.svg';
import share from '../../../assets/images/icons/share.svg';
import menu from '../../../assets/images/icons/menu.svg';


const Header = props => {
    return (
        <div className="mn-header">
            <div className="header-left-content">
                <img className="left-header-logo" src={logo} />
                <div className="magazine-date">May 2020</div>
            </div>
            <div className="header-center-content">
                <img className="header-logo" src={logo} />
            </div>
            <div className="header-right-content">
                <div className="header-actions">
                    <button>
                        <img src={font} />
                    </button>
                    <button>
                        <img src={share} />
                    </button>
                    <button id="headerMenuBtn" className="header-menu-btn">
                        <img src={menu} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
