import React, {useState} from 'react';
import useScrollPosition from '../../hooks/useScrollPosition';



function Header({data}) {
    // let size = useWindowSize();
    let scrollPosition = useScrollPosition();

    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuOpen = () => {
        setMenuOpen(true);
    }
    const handleMenuClose = () => {
        setMenuOpen(false);
    }
    const {logo, headerMenus} = data !== null && data
  return (
      <>
        <header className={`bs-header ${(scrollPosition > 10 ) ? "header-blur header-scroll" : ""}`}>
            <div className="cm-container">
                <a href="/home" className="logo">
                    <img src={`http://13.233.247.201:1337/${logo.data.attributes.url}`} alt="Company Logo" title="Company Logo" />
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
                        <>
                            <li className="menu-item" key={index}>
                                <a href={item.link} className={` menu-link`}>{item.name}</a>
                            </li>
                            {item.submenus.map((ele, i)=> {
                                return (
                                <li className="menu-item" key={i}>
                                    <a href={ele.link} className={`menu-link typ-sm cm-highlight ${ele.name === "Ceramic Coating"? 'highlight-primary': ele.name === "PPF"?' highlight-secondary': ''}`}>{ele.name}</a>
                                </li>
                                )
                            })}
                        </>
                    )
                })}
            </ul>
        </div>
    </>
  )
}

export default Header