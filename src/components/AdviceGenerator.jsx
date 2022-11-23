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
      <button
        className="dice-button"
        onClick={handleClick}
        disabled={props.loading}
      >
        {props.loading ? (
          <div className="spinner"></div>
        ) : (
          <img src={dice} alt="dice" />
        )}
      </button>
    </div>
  );
}

export default AdviceGenerator;
