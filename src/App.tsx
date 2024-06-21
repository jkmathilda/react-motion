import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

// Define the interface for hover configuration
interface HoverConfig {
  x: string;
  y: string;
}

// Styled components
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
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Circle = styled(motion.div)`
  background-color: white;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  position: absolute;
`;

interface BoxComponentProps {
  hoverConfig: HoverConfig;
  isActive: boolean;
}

const BoxComponent: React.FC<BoxComponentProps> = ({ hoverConfig, isActive }) => (
  <Box whileHover={{ scale: 1.1, ...hoverConfig }}>
    <AnimatePresence>
      {isActive && (
        <Circle
          key="circle"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      )}
    </AnimatePresence>
  </Box>
);

const ButtonContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const ButtonComponent: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <ButtonContainer>
      <button onClick={onClick}>Switch</button>
    </ButtonContainer>
  );
};

const App: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const boxConfigs: HoverConfig[] = [
    { x: "-5%", y: "-5%" },
    { x: "5%", y: "-5%" },
    { x: "-5%", y: "5%" },
    { x: "5%", y: "5%" },
  ];

  const handleSwitch = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % boxConfigs.length);
  };

  return (
    <Wrapper>
      <div>
        <div className="row">
          <BoxComponent hoverConfig={boxConfigs[0]} isActive={activeIndex === 0} />
          <BoxComponent hoverConfig={boxConfigs[1]} isActive={activeIndex === 1} />
        </div>
        <div className="row">
          <BoxComponent hoverConfig={boxConfigs[2]} isActive={activeIndex === 2} />
          <BoxComponent hoverConfig={boxConfigs[3]} isActive={activeIndex === 3} />
        </div>
        <ButtonComponent onClick={handleSwitch} />
      </div>
    </Wrapper>
  );
};

export default App;
