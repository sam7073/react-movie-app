import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__menus">
        <Link className="navigation__menu" to={{ pathname: "/" }}>
          <span className="navigation__text">Home</span>
        </Link>
        <Link className="navigation__menu" to={{ pathname: "/about" }}>
          <span className="navigation__text">about</span>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
