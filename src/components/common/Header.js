import React, { useState } from 'react';
import { OutletProps } from 'react-router-dom';
import logoImg from '../../assets/images/logo.png';
import useScrollPosition from '../../hooks/useScrollPosition';

function Header(props) {

    let scrollPosition = useScrollPosition();

    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuOpen = () => {
        setMenuOpen(true);
    }
    const handleMenuClose = () => {
        setMenuOpen(false);
    }
    return (
        <>
            <header className={`bs-header ${(scrollPosition > 10) ? "header-blur header-scroll" : ""}`}>
                <div className="cm-container">
                    <a href="/home" className="logo">
                        <img src={logoImg} alt="Company Logo" title="Company Logo" />
                    </a>
                    <button className="menu-btn" onClick={handleMenuOpen}>
                        <span className="bar1"></span>
                        <span className="bar2"></span>
                        <span className="bar3"></span>
                    </button>
                </div>
            </header>
            <div className={`bs-menu ${menuOpen ? "active" : ""}`}>
                <button type="button" className="icon icon-close menu-close" onClick={handleMenuClose}></button>
                <ul className="menu-wrap">
                    <li className="menu-item">
                        <a href="/home" className={`menu-link ${window.location.pathname === "/" || window.location.pathname === "/home" ? 'cm-highlight highlight-primary': ''}`}>Home</a>
                    </li>
                    <li className="menu-item">
                        <a href="/about-us" className={`menu-link ${window.location.pathname === "/about-us"? 'cm-highlight highlight-primary': ''}`}>About Us</a>
                    </li>
                    <li className="menu-item">
                        <a href="/services" className={`menu-link ${window.location.pathname === "/services"? 'cm-highlight highlight-primary': ''}`}>All Services</a>
                    </li>
                    <li className="menu-item">
                        <a href="/washing-services" className={`menu-link typ-sm ${window.location.pathname === "/washing-services"? 'cm-highlight highlight-primary': ''}`}>Wash</a>
                    </li>
                    <li className="menu-item">
                        <a href="/detailing-services" className={`menu-link typ-sm ${window.location.pathname === "/detailing-services" && props.activeTab === 1 ? 'cm-highlight highlight-primary': ''}`}>Interior Detailing</a>
                    </li>
                    <li className="menu-item">
                        <a href="/detailing-services" className={`menu-link typ-sm ${window.location.pathname === "/detailing-services" && props.activeTab === 0 ? 'cm-highlight highlight-primary': ''}`}>Exterior Detailing</a>
                    </li>
                    <li className="menu-item">
                        <a href="/ceramic-coating" className="menu-link typ-sm cm-highlight highlight-primary">Ceramic Coating</a>
                    </li>
                    <li className="menu-item">
                        <a href="/paint-protection-film" className="menu-link typ-sm cm-highlight highlight-secondary">PPF</a>
                    </li>
                    <li className="menu-item">
                        <a href="/customisation-service" className={`menu-link typ-sm ${window.location.pathname === "/customisation-service"? 'cm-highlight highlight-primary': ''}`}>Customisation</a>
                    </li>
                    <li className="menu-item">
                        <a href="/premium-packages" className={`menu-link ${window.location.pathname === "/premium-packages" || window.location.pathname === '/comprehensive-package' || window.location.pathname === '/signature-package' || window.location.pathname === '/essential-package'? 'cm-highlight highlight-primary': ''}`}>Packages</a>
                    </li>
                    <li className="menu-item">
                        <a href="/franchise-with-us" className={`menu-link ${window.location.pathname === "/franchise-with-us"? 'cm-highlight highlight-primary': ''}`}>Franchise</a>
                    </li>
                    <li className="menu-item">
                        <a href="/contact-us" className={`menu-link ${window.location.pathname === "/contact-us"? 'cm-highlight highlight-primary': ''}`}>Contact</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header