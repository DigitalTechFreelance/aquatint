import React, {useState} from 'react';
import logoImg from '../../assets/images/logo.png';

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuOpen = () => {
        setMenuOpen(true);
    }
    const handleMenuClose = () => {
        setMenuOpen(false);
    }

  return (
      <>
    <header className="bs-header">
        <div className="cm-container">
            <a href="#" className="logo">
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
            <button type="button" className="icon icon-close menu-close" onClick={handleMenuClose}>x</button>
            <ul className="menu-wrap">
                <li className="menu-link">
                    <a href="#" className="menu-link">About Us</a>
                </li>
                <li className="menu-link sub-menu">
                    <a href="#" className="menu-link">Services</a>
                    <ul className="sub-menu-wrap">
                        <li className="menu-item">
                            <a href="#" className="menu-link">About Us</a>
                        </li>
                        <li className="menu-item">
                            <a href="#" className="menu-link">About Us</a>
                        </li>
                        <li className="menu-item">
                            <a href="#" className="menu-link">About Us</a>
                        </li>
                    </ul>
                </li>
                <li className="menu-link sub-menu">
                    <a href="#" className="menu-link">Ceramic Coating</a>
                    <ul className="sub-menu-wrap">
                        <li className="menu-item">
                            <a href="#" className="menu-link">About Us</a>
                        </li>
                        <li className="menu-item">
                            <a href="#" className="menu-link">About Us</a>
                        </li>
                        <li className="menu-item">
                            <a href="#" className="menu-link">About Us</a>
                        </li>
                    </ul>
                </li>
                <li className="menu-link">
                    <a href="#" className="menu-link">PPF</a>
                </li>
                <li className="menu-link">
                    <a href="#" className="menu-link">Franchise</a>
                </li>
                <li className="menu-link">
                    <a href="#" className="menu-link">Contact</a>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Header