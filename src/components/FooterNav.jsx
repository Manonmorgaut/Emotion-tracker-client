import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "./Auth/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export class FooterNav extends Component {
  static contextType = UserContext;
  render() {
    const { user } = this.context;
    return (
      <nav id="FooterNav">
        <ul className="nav-list">
          <li>
            {/* ?? Why is the font awesome icon not showing? */}
            <NavLink to="/">
              <FontAwesomeIcon icon={faHome} size="3x" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/calendar">
              <FontAwesomeIcon icon={faCalendar}  size="3x" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile">
            <img
            id ="footerProfileImg"
            src={user.profileImg}
            alt={user.firstName}
          />
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default FooterNav;
