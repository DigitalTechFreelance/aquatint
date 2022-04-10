import React, {useState} from 'react';
import useScrollPosition from '../../hooks/useScrollPosition';
import useWindowSize from '../../hooks/useWindowSize';  


function Header({data}) {
    let size = useWindowSize();
    let scrollPosition = useScrollPosition();

    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuOpen = () => {
        setMenuOpen(true);
    }
    const handleMenuClose = () => {
        setMenuOpen(false);
    }
    const {logo, headerMenus} = data
  return (
      <>
        <header className={`bs-header ${(scrollPosition > 10 ) ? "header-blur header-scroll" : ""}`}>
            <div className="cm-container">
                <a href="/home" className="logo">
                    <img src={`http://localhost:1337${logo.data.attributes.url}`} alt="Company Logo" title="Company Logo" />
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
                {headerMenus.map((item, index)=>{
                    return(
                        <li className="menu-link" key={index}>
                            <a href={item.link} className="menu-link">{item.name}</a>
                        </li>
                    )
                })}
                {/* <li className="menu-link">
                    <a href="/about-us" className="menu-link">About Us</a>
                </li>
                <li className="menu-link sub-menu">
                    <a href="/services" className="menu-link">Services</a>
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
                    <a href="/ceramic-coating" className="menu-link">Ceramic Coating</a>
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
                </li> */}
            </ul>
        </div>
    </>
  )
}

export default Header