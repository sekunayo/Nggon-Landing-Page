import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { ReactComponent as FirstLogo } from "../../assets/svgs/architecture-82557.svg";
import { ReactComponent as SecondLogo } from "../../assets/svgs/building-inspector.svg";
import { ReactComponent as FourthLogo } from "../../assets/svgs/building-square-4560.svg";
import { ReactComponent as ThirdLogo } from "../../assets/svgs/fletcher-building.svg";
import { ReactComponent as FifthLogo } from "../../assets/svgs/prada-logo-1.svg";

function Sponsors() {
  const styles = useSpring({
    from: { opacity: 0, marginLeft: -100 },
    to: { opacity: 1, marginLeft: 0 },
  });
  return (
    <section className="sponsor">
      <animated.div className="sponsor-box" style={styles}>
        <div className="sponsor-svg-logo">
          <FirstLogo />
        </div>
        <div className="sponsor-svg-logo">
          <SecondLogo />
        </div>
        <div className="sponsor-svg-logo">
          <ThirdLogo />
        </div>
        <div className="sponsor-svg-logo">
          <FourthLogo />
        </div>
        <div className="sponsor-svg-logo">
          <FifthLogo />
        </div>
      </animated.div>
    </section>
  );
}

export default Sponsors;
