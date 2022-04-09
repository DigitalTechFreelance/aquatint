import React,{useState} from 'react';

function Flybutton() {
  const [isActive, setActive] = useState(false);
  return (
    <>
    <div className={`bs-action-fly ${isActive ? 'active' :''}`}>
      <div className="fly-icon-link-wrap">
        <a href="#" className="action-link">
          <span className="icon icon-email"></span>
        </a>
        <a href="#" className="action-link">
          <span className="icon icon-whatsapp"></span>
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