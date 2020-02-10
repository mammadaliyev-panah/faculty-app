import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../image/logis.png";
class Navi extends Component {
  render() {
    return (
      <div className="navigation">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand d-flex flex-row" to="/">
            <img src={logo} className="img-fluid" alt="logo"/>
          </Link>
          <Link to="/"><h4>İnformasiya Texnologiyaları Fakültəsi</h4></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end navItem"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Əsas Səhifə
                </Link>
              </li>
              <li className="nav-item">
                <Link to="newStudentForm" className="nav-link">
                  Yeni tələbə
                </Link>
              </li>

              <li className="nav-item">
                <Link to="techWarriors" className="nav-link">
                  Tech Warriors
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navi;
