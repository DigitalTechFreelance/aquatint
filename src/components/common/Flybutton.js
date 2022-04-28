import React,{useState} from 'react';

function Flybutton() {
  const [isActive, setActive] = useState(false);
  return (
    <>
    <div className={`bs-action-fly ${isActive ? 'active' :''}`}>
      <div className="fly-icon-link-wrap">
        <a href="tel:7066457656" target="_blank" className="action-link">
          <span className="icon icon-phone"></span>
        </a>
        <a href="https://wa.me/+919762375553" target="_blank" className="action-link">
          <span className="icon icon-whatsapp"></span>
        </a>
        <a href="mailto:carcare@aquatintdetailing.com" target="_blank" className="action-link">
          <span className="icon icon-email"></span>
        </a>
      </div>
      <button className='fly-trigger' onClick={() =>setActive(!isActive)}>
        {isActive ? <span className='icon icon-close'></span> : <span className='icon icon-chat'></span>}
      </button>
    </div>
    </>

  )
}

export default Flybutton;