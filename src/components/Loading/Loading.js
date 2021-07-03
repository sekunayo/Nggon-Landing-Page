import React from "react";
import { useSpring, animated } from "@react-spring/web";

function Loading() {
  const styles = useSpring({
    loop: true,
    from: {
      opacity: 0,
      transform: "scale(0.5)",
    },
    to: { opacity: 1, transform: "scale(1)" },
  });
  return (
    <div className="loading">
      <animated.div className="loading-circle" style={styles}></animated.div>
    </div>
  );
}

export default Loading;
