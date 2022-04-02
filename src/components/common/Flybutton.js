import React,{useState} from 'react';

function Flybutton() {
  const [isActive, setActive] = useState(false);
  return (
    <>
    <div className={`bs-action-fly ${isActive ? 'active' :''}`}>
      <div className="fly-icon-link-wrap">
        <a href="#" class="action-link">
          <span className="icon icon-mail"></span>
        </a>
        <a href="#" class="action-link">
          <span className="icon icon-mail"></span>
        </a>
      </div>
      <button className='fly-trigger'onClick={() =>setActive(!isActive)}>
        <span className='icon icon-hammer'></span>
      </button>
    </div>
    </>

  )
}

export default Flybutton;