import React, { Component } from "react";
import "../css/Navigation.css";
import { FaSearch } from "react-icons/fa";

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <a className="logo" href="/">Weather app</a>
          <li className="search-container">
            <input type="search" placeholder="Search"></input>
            <label className="icon">
              <span><FaSearch></FaSearch></span>
            </label>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
