// import React from "react";
// import styled from "styled-components";
// import { motion } from "framer-motion";
// import "./App.css";

// const Wrapper = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Box = styled(motion.div)`
//   width: 300px;
//   height: 200px;
//   background-color: rgba(255, 245, 245, 0.6);
//   border-radius: 10px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
//   margin: 10px;
// `;

// function App() {
//   return (
//     <Wrapper>
//       <div className="all_boxes">
//         <div className="row">
//           <Box
//             transition={{ type: "spring", delay: 0.5 }}
//             initial={{ scale: 0 }}
//             animate={{ scale: 1, rotateZ: 360 }}
//             whileHover={{
//               scale: 1.1,
//               x: "-10%",
//               y: "-10%",
//             }}
//           />{" "}
//           <Box
//             transition={{ type: "spring", delay: 0.5 }}
//             initial={{ scale: 0 }}
//             animate={{ scale: 1, rotateZ: 360 }}
//             whileHover={{
//               scale: 1.1,
//               x: "10%",
//               y: "-10%",
//             }}
//           />
//         </div>
//         <div className="row">
//           <Box
//             transition={{ type: "spring", delay: 0.5 }}
//             initial={{ scale: 0 }}
//             animate={{ scale: 1, rotateZ: 360 }}
//             whileHover={{
//               scale: 1.1,
//               x: "-10%",
//               y: "10%",
//             }}
//           />
//           <Box
//             transition={{ type: "spring", delay: 0.5 }}
//             initial={{ scale: 0 }}
//             animate={{ scale: 1, rotateZ: 360 }}
//             whileHover={{
//               scale: 1.1,
//               x: "10%",
//               y: "10%",
//             }}
//           />
//         </div>
//       </div>
//     </Wrapper>
//   );
// }

// export default App;

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "./App.css";

interface HoverConfig {
  x: string;
  y: string;
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 200px;
  background-color: rgba(255, 245, 245, 0.6);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  margin: 10px;
`;


interface BoxComponentProps {
  hoverConfig: HoverConfig;
}

const BoxComponent = ({ hoverConfig }: BoxComponentProps) => (
  <Box
    transition={{ type: "spring", delay: 0.5 }}
    initial={{ scale: 0 }}
    animate={{ scale: 1, rotateZ: 360 }}
    whileHover={{ scale: 1.1, ...hoverConfig }}
  />
);

const App = () => {
  return (
    <Wrapper>
      <div className="all_boxes">
        <div className="row">
          <BoxComponent hoverConfig={{ x: "-5%", y: "-5%" }} />
          <BoxComponent hoverConfig={{ x: "5%", y: "-5%" }} />
        </div>
        <div className="row">
          <BoxComponent hoverConfig={{ x: "-5%", y: "5%" }} />
          <BoxComponent hoverConfig={{ x: "5%", y: "5%" }} />
        </div>
      </div>
    </Wrapper>
  );
}

export default App;
