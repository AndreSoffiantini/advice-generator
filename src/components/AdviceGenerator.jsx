import { React } from "react";
import dice from "../assets/images/icon-dice.svg";

function AdviceGenerator(props) {
  const fetchAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const json = await response.json();
    props.setAdviceObject(json.slip);
  };

  return (
    <div className="dice-button-container">
      <span className="dice-button" onClick={fetchAdvice}>
        <img src={dice} alt="dice" />
      </span>
    </div>
  );
}

export default AdviceGenerator;
