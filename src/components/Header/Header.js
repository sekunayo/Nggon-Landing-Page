import React from "react";
import Button from "../Button/Button";
import { useSpring, animated } from "react-spring";

function Header() {
  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: "#ffaaee" },

      { opacity: 0, color: "rgb(14,26,19)" },
    ],
    from: { opacity: 0, color: "red" },
  });
  return (
    <animated.header className="page-header ">
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
    </animated.header>
  );
}

export default Header;
