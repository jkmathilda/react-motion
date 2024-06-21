import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

interface HoverConfig {
  x: string;
  y: string;
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
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
  cursor: pointer;
  position: relative;
`;

const Circle = styled(motion.div)`
  background-color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const EnlargedBox = styled(motion.div)`
  width: 450px;
  height: 300px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

function ButtonComponent({ onClick }: { onClick: () => void }) {
  return (
    <ButtonContainer>
      <button onClick={onClick}>Switch</button>
    </ButtonContainer>
  );
}

const items = ["1", "2", "3", "4"];

function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
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
      <Grid>
        {Array.from({ length: Math.ceil(items.length / 2) }, (_, rowIndex) => (
          <Row key={rowIndex}>
            {items.slice(rowIndex * 2, rowIndex * 2 + 2).map((item, index) => (
              <Box
                key={item}
                layoutId={item}
                onClick={() => setSelectedId(item)}
                whileHover={{ scale: 1.1, ...boxConfigs[rowIndex * 2 + index] }}
              >
                <AnimatePresence>
                  {activeIndex === rowIndex * 2 + index && !selectedId && (
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
            ))}
          </Row>
        ))}
      </Grid>

      <ButtonComponent onClick={handleSwitch} />

      <AnimatePresence>
        {selectedId && (
          <Overlay onClick={() => setSelectedId(null)}>
            <EnlargedBox layoutId={selectedId}>
              <motion.div style={{ position: "relative" }} />
            </EnlargedBox>
          </Overlay>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;

