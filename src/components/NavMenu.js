import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import { conf } from '../config/data/conf.js'

function NavMenu() {
  const [menu, setMenu] = useState(false);
  let mClass = "w3-bar-item w3-button w3-mobile w3-hover-none w3-text-light-grey w3-hover-text-yellow "
  if(!menu){
    mClass += "w3-hide-small"
  }
  const server = window.location.pathname.startsWith("/docs")
  return (
    <div id="topnav" className="w3-bar w3-top w3-black" >
      <div className="w3-bar">
        <button
          className="w3-bar-item w3-button w3-hide-large w3-hide-medium w3-hover-none w3-text-light-grey w3-hover-text-yellow"  
          style={{padding:3, paddingLeft:16 }}
          title="MENU" onClick={() => setMenu(!menu)}>
          <i className="fas fa-bars fa-2x"></i>
        </button>
        <Link replace to="/" className={mClass} onClick={() => setMenu(false)}>HOME</Link>
        <Link replace to="/model" className={mClass} onClick={() => setMenu(false)}>MODEL</Link>
        <Link replace to="/api" className={mClass} onClick={() => setMenu(false)}>API</Link>
        <a href={(server)?conf.server_report_demo:conf.url_demo} 
          target="_blank" rel="noopener noreferrer" onClick={() => setMenu(false)}
          className={mClass}>REPORT</a>
        <Link replace to="/admin" className={mClass} onClick={() => setMenu(false)}>ADMIN</Link>
        <a href={(server)?conf.server_client:conf.url_client} 
          target="_blank" rel="noopener noreferrer" onClick={() => setMenu(false)}
          className={mClass}>CLIENT</a>
      </div>
    </div>
  )
}

export default NavMenu;