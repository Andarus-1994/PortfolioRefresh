import { useCallback, useEffect, useState } from "react";

function Lines({ number }) {
  const [linesElement, setLinesElement] = useState([]);
  const randomNumberX = () => {
    return Math.floor(Math.random() * (-350 + 0 + 1)) + -150;
  };
  const randomNumberY = () => {
    return Math.floor(Math.random() * (10 - 90 + 1)) + 80;
  };
  const transitionDelay = () => {
    return Math.floor(Math.random() * (0 - 6 + 1)) + 3;
  };
  const animationDuration = () => {
    return Math.floor(Math.random() * (0 - 6 + 5)) + 12;
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
              animationDuration: animationDuration() + "s",
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
