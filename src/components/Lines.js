import { useCallback, useEffect, useState } from "react";

function Lines({ number }) {
  const [linesElement, setLinesElement] = useState([]);
  const randomNumberX = () => {
    return Math.floor(Math.random() * (-350 + 150 + 1)) + -200;
  };
  const randomNumberY = () => {
    return Math.floor(Math.random() * (10 - 90 + 1)) + 100;
  };
  const transitionDelay = () => {
    return Math.floor(Math.random() * (0 - 6 + 1)) + 4;
  };
  const lines = useCallback(() => {
    let tmp = [];
    for (let i = 0; i < number; i++) {
      tmp.push(i);
    }
    setLinesElement(
      tmp.map(function (i) {
        return (
          <div
            className="line"
            key={i}
            style={{
              top: randomNumberX() + "px",
              left: randomNumberY() + "%",
              animationDelay: transitionDelay() + "s",
            }}
          ></div>
        );
      })
    );
  }, [number]);
  useEffect(() => {
    lines();
  }, [lines]);
  return <div className="Lines">{linesElement}</div>;
}

export default Lines;
