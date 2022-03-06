import React from 'react';

function Header() {
  return (
    <header className="bs-header">
        <a href="#" className="logo">
            <img src="" alt="Company Logo" title="Company Logo" />
        </a>
        <a href="#" className="menu-btn">
            <span></span>
            <span></span>
            <span></span>
        </a>
        <div className="bs-menu">
            <button type="button" className="icon icon-close"></button>
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
    </header>
  )
}

export default Headers