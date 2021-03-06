import React, { Component } from "react";
import "./Nav.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import TokenService from "../services/token-service";
import IdleService from "../services/idle-service";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropDown: false,
    };
  }

  handleDropDown = () => {
    if (!this.state.showDropDown) {
      this.setState({ showDropDown: true });
    } else this.setState({ showDropDown: false });
  };
  handleUnDrop = () => {
    this.setState({ showDropDown: false });
  };
  handleLogoutClick() {
    Promise.all([
      TokenService.clearAuthToken(),
      TokenService.clearCallbackBeforeExpiry(),
      IdleService.unRegisterIdleResets(),
    ]).catch((error) => {
      console.error({ error });
    });
  }

  render() {
    let data = [
      { id: 1, name: "About", path: "/about" },
      { id: 2, name: "Create an Account", path: "/register" },
      { id: 3, name: "Log In", path: "/login" },
    ];
    if (TokenService.hasAuthToken()) {
      data = [
        { id: 1, name: "About", path: "/about" },
        { id: 3, name: "Networth", path: "/networth" },
      ];
      return (
        <div
          className="Menu"
          onMouseEnter={this.handleDropDown}
          onMouseLeave={this.handleUnDrop}
        >
          <FontAwesomeIcon
            className="burgerIcon"
            onClick={this.handleDropDown}
            icon={faBars}
          />
          {this.state.showDropDown ? (
            <ul id="nav-leader" onClick={this.handleUnDrop}>
              {data.map((data) => (
                <li key={data.id}>
                  <Link className="menuLink" to={data.path}>
                    <h3>{data.name}</h3>
                  </Link>
                </li>
              ))}
              <li className="Header__logged-in">
                <Link
                  className="menuLink"
                  onClick={this.handleLogoutClick}
                  to="/"
                >
                  {" "}
                  <h3>Logout</h3>{" "}
                </Link>
              </li>
            </ul>
          ) : null}
        </div>
      );
    } else
      return (
        <div
          className="Menu"
          onMouseEnter={this.handleDropDown}
          onMouseLeave={this.handleUnDrop}
        >
          <FontAwesomeIcon
            className="burgerIcon"
            onClick={this.handleDropDown}
            icon={faBars}
          />
          {this.state.showDropDown ? (
            <ul id="nav-leader">
              {data.map((data) => (
                <li key={data.id} onClick={this.handleUnDrop}>
                  <Link className="menuLink" to={data.path}>
                    <h3>{data.name}</h3>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      );
  }
}
