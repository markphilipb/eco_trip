// import React, { Component } from "react";
// import Card from "react-bootstrap/Card";
// import CarbonData from "../CarbonData/CarbonData";
// import RouteForm from "../RouteForm/RouteForm";

// const containerStyle = {
//   width: "600px",
//   height: "600px",
// };

// class SidePanel extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       origin: "",
//       destination: "",
//       showCarbonData: false,
//     };

//     this.setCarbonData = this.setCarbonData.bind(this);
//   }

//   setCarbonData() {
//     this.setState((prevState) => ({
//       showCarbonData: !prevState.showCarbonData,
//     }));
//   }

//   render() {
//     return (
//       <Card
//         className="shadow-lg p-3 mb-5 bg-white rounded"
//         border="light"
//         style={containerStyle}
//       >
//         <Card.Body>
//           {!this.state.showCarbonData ? (
//             <RouteForm
//               handleClick={this.props.handleClick}
//               showCarbon={this.setCarbonData}
//             />
//           ) : (
//             <CarbonData />
//           )}
//         </Card.Body>
//       </Card>
//     );
//   }
// }

// export default SidePanel;

import React, { useState } from "react";
import { useSpring, a } from "@react-spring/web";
import CarbonData from "../CarbonData/CarbonData";
import RouteForm from "../RouteForm/RouteForm";
import Card from "react-bootstrap/Card";

export default function SidePanel(props) {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

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
          <a.div style={{ opacity: opacity.to((o) => 1 - o), transform }}>
            <RouteForm
              handleClick={props.handleClick}
              showCarbon={() => set((state) => !state)}
            />
          </a.div>

          <a.div
            style={{
              opacity,
              transform,
              rotateX: "180deg",
            }}
          >
            <CarbonData distance={props.distance} />
          </a.div>
        </Card.Body>
      </Card>
    </div>
  );
}