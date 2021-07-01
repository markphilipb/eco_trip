import React, { useState } from "react";
import useMeasure from "react-use-measure";
import { useSpring, animated } from "@react-spring/web";
import "./SpringMeter.css";
/**
 * FIXME: Remove number inside meter
 * @param  {} props
 */
export default function SpringMeter(props) {
  const [open, toggle] = useState(false);
  const [ref, { width }] = useMeasure();
  const prp = useSpring({
    width: props.open ? width : 0,
    background: props.color,
  });

  return (
    <div className="container">
      <div
        ref={ref}
        className="main"
        style={{ width: props.width + "px" }}
        // onClick={() => toggle(!open)}
      >
        <animated.div className="fill" style={prp} />
        <animated.div className="content">
          {prp.width.to((x) => x.toFixed(0))}
        </animated.div>
      </div>
    </div>
  );
}
