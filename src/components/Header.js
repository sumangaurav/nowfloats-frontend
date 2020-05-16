import React,{ useState } from "react"

import dialer from "../images/call.svg"
import searchIcon from "../images/search.svg"
import closeIcon from "../images/close.svg"

export default function Header(props){

  const [showSearchBar, toggleSearchBar] = useState(false)
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Updates</a></li>
          <li><a href="#">More Info</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="contact">
        <a href="tel:+91 8123456789">
          <img className="dialer-icon" src={dialer} alt="phone-icon" />
          +91 8123456789
        </a>
      </div>
      
      <div className="search">
        {
          !showSearchBar && 
          <img onClick={() => toggleSearchBar(true) } className="search-icon" src={searchIcon} alt="search-icon"></img>
        }
        
        {
          showSearchBar &&
          (
            <React.Fragment>
              <img onClick={() => toggleSearchBar(false) } className="close-icon" src={closeIcon} alt="close-icon"></img>
              <input name="searchText" type="text" placeholder="Search"/> 
            </React.Fragment>
          )
        }
      </div>
    </header>
    )
  }