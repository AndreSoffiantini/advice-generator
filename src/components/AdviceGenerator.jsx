import { React } from "react";
import dice from "../assets/images/icon-dice.svg";

function AdviceGenerator(props) {
  const handleClick = () => {
    props.setLoading(true);
    clearInterval(props.intervalId);
    const newInterval = setInterval(props.setLoading(true), 60000);
    props.setIntervalId(newInterval);
  };

  return (
    <div className="dice-button-container">
      <span className="dice-button" onClick={handleClick}>
        <img src={dice} alt="dice" />
      </span>
    </div>
  );
}

export default AdviceGenerator;
