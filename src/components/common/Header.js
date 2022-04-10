import React, {useState} from 'react';
import logoImg from '../../assets/images/logo.png';
import useScrollPosition from '../../hooks/useScrollPosition';
import useWindowSize from '../../hooks/useWindowSize';  


function Header() {
    let size = useWindowSize();
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
    <header className={`bs-header ${(scrollPosition > 10 ) ? "header-blur header-scroll" : ""}`}>
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
                    <a href="/about-us" className="menu-link">About Us</a>
                </li>
                <li className="menu-item">
                    <a href="/services" className="menu-link">All Services</a>
                </li>
                <li className="menu-item">
                    <a href="#" className="menu-link typ-sm">Wash</a>
                </li>
                <li className="menu-item">
                    <a href="#" className="menu-link typ-sm">Interior Detailing</a>
                </li>
                <li className="menu-item">
                    <a href="#" className="menu-link typ-sm">Exterior Detailing</a>
                </li>
                <li className="menu-item">
                    <a href="#" className="menu-link typ-sm cm-highlight highlight-primary">Ceramic Coating</a>
                </li>
                <li className="menu-item">
                    <a href="#" className="menu-link typ-sm cm-highlight highlight-secondary">PPF</a>
                </li>
                <li className="menu-item">
                    <a href="#" className="menu-link typ-sm">Customisation</a>
                </li>
                <li className="menu-item">
                    <a href="/franchise-with-us" className="menu-link">Franchise</a>
                </li>
                <li className="menu-item">
                    <a href="/contact-us" className="menu-link">Contact</a>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Header