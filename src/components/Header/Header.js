import React from "react";
import Button from "../Button/Button";

function Header() {
  return (
    <header className="page-header">
      <div className="page-header-box">
        <div className="page-header-logo">
          <p>aaa</p>
        </div>
        <nav className="page-header-nav">
          <ul>
            <li className="page-header-navlink">About</li>
            <li className="page-header-navlink">Features</li>
            <li className="page-header-navlink">Invest</li>
            <li className="page-header-navlink">Consults</li>
          </ul>
        </nav>
        <nav className="page-header-signup">
          <ul>
            <li className="page-header-signup-navlink bolder">Login</li>
            <Button
              buttonStyle="button button-light"
              children="create account"
            />
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
