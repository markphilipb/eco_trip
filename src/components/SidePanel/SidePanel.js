import React, { useState, useCallback, CSSProperties, useEffect } from "react";
import {
  useTransition,
  animated,
  AnimatedProps,
  useSpringRef,
  useSpring,
} from "@react-spring/web";
import CarbonData from "../CarbonData/CarbonData";
import RouteForm from "../RouteForm/RouteForm";
import Card from "react-bootstrap/Card";

/**
 * This component is the parent component of the {@link RouteForm} and {@link CarbonData} components.
 */
export default function SidePanel(props) {
  const [index, set] = useState(0);
  const onClick = useCallback(() => set((state) => (state + 1) % 2), []);
  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });
  const pages: ((
    prps: AnimatedProps<{ style: CSSProperties }>
  ) => React.ReactElement)[] = [
    ({ style }) => (
      <animated.div style={{ ...style, background: "white" }}>
        <RouteForm handleClick={props.handleClick} transitionFunc={onClick} />
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style, background: "white" }}>
        <CarbonData distance={props.distance} />
      </animated.div>
    ),
  ];

  useEffect(() => {
    transRef.start();
  }, [index]);

  const containerStyle = {
    width: "600px",
    height: "600px",
  };

  return (
    <div>
      <Card
        className="shadow-lg p-3 mb-5 bg-white rounded"
        border="light"
        style={containerStyle}
      >
        <Card.Body>
          <div className={`flex fill`}>
            {transitions((style, i) => {
              const Page = pages[i];
              return <Page style={style} />;
            })}
          </div>
          {/* <RouteForm
            handleClick={props.handleClick}
            // showCarbon={() => set((state) => !state)}
          />

          <CarbonData distance={props.distance} /> */}
        </Card.Body>
      </Card>
    </div>
  );
}
