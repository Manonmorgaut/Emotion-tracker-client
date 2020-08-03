import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';



export class FooterNav extends Component {
  render() {
    return (
      <nav>
        <ul className="nav-list">
          <li>
            {/* ?? Why is the font awesome icon not showing? */}
            <NavLink to="/">
            <FontAwesomeIcon icon={faHome} />
            Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/calendar"><FontAwesomeIcon icon={faCalendar} /> Calendar</NavLink>
          </li>
          <li>
            <NavLink to="/profile"><FontAwesomeIcon icon={faUser} /> Profile</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default FooterNav;
