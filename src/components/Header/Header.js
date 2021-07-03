import React from "react";
import { useSpring, useTrail, animated } from "@react-spring/web";

function Header() {
  const navigation = ["About", "Features", "Invest", "Consults"];
  const trailAnimation = useTrail(navigation.length, {
    from: { opacity: 0, marginTop: -100, marginLeft: -100 },
    to: { opacity: 1, marginTop: 0, marginLeft: 0 },
  });
  const styles = useSpring({
    from: { opacity: 0, marginTop: -100, marginLeft: -100 },
    to: { opacity: 1, marginTop: 0, marginLeft: 0 },
  });
  return (
    <header className="page-header ">
      <div className="page-header-box">
        <div className="page-header-logo">
          <animated.p style={styles}>aaa</animated.p>
        </div>
        <nav className="page-header-nav">
          <ul>
            {trailAnimation.map((props, index) => {
              return (
                <animated.li
                  className="page-header-navlink"
                  style={props}
                  key={navigation[index]}
                >
                  {navigation[index]}
                </animated.li>
              );
            })}
          </ul>
        </nav>
        <nav className="page-header-signup">
          <ul>
            <animated.li
              style={styles}
              className="page-header-signup-navlink bolder"
            >
              Login
            </animated.li>
            <animated.button className="button button-light" style={styles}>
              create account
            </animated.button>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
