import React, { useState } from 'react';
import useScrollPosition from '../../hooks/useScrollPosition';



function Header({ data }) {
    // let size = useWindowSize();
    let scrollPosition = useScrollPosition();

    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuOpen = () => {
        setMenuOpen(true);
    }
    const handleMenuClose = () => {
        setMenuOpen(false);
    }
         
    function gtag_report_conversion(url) {
        if (typeof(url) != 'undefined') {
            window.location = url;
        }
    }

    const onClickEvent = (url)=>{
        const isBrowser = typeof window !== "undefined"
        if (isBrowser) {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-929250397/VGh-CJma6OsYEN34jLsD',
                'event_callback': gtag_report_conversion(url)
            });
      }
  }

    const { logo, headerMenus } = data !== null && data
    return (
        <>
            <header className={`bs-header ${(scrollPosition > 10) ? "header-scroll" : ""}`}>
                <div className="cm-container">
                    <a href="/home" className="logo">
                        <img src={logo.url} alt={logo.alternativeText} title={logo.name} />
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
                    {headerMenus.map((item, index) => {
                        return (
                            item.isActive && (
                                <>
                                    <li className="menu-item" key={index}>
                                        <a href={item.link} className={`menu-link ${window.location.pathname === item.link ? 'cm-highlight highlight-primary' : ''}`} 
                                        onClick={()=>onClickEvent(item.link)}
                                        >{item.name}</a>
                                    </li>
                                    {item.submenus.map((ele, i) => {
                                        return (
                                            ele.isActive && (
                                                <li className="menu-item" key={i}>
                                                    <a href={ele.link} className={`menu-link typ-sm ${window.location.pathname === ele.link ? 'cm-highlight highlight-primary' : ''}`} onClick={()=>onClickEvent(ele.link)}>{ele.name}</a>
                                                </li>
                                            )
                                        )
                                    })}
                                </>
                            )
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Header