import { React, useState, useEffect } from "react";
import AdviceText from "./AdviceText";
import AdviceGenerator from "./AdviceGenerator";
import AdviceNumber from "./AdviceNumber";
import Divider from "./Divider";

/* import dividerDesktop from "../assets/images/pattern-divider-desktop.svg";
import dividerMobile from "../assets/images/pattern-divider-mobile.svg"; */

function AdviceSection() {
  const [adviceObject, setAdviceObject] = useState({
    id: null,
    advice: null,
  });

  useEffect(() => {
    const fetchAdviceMount = async () => {
      const response = await fetch("https://api.adviceslip.com/advice");
      const json = await response.json();
      setAdviceObject(json.slip);
    };

    fetchAdviceMount();
  }, []);

  return (
    <div className="advice-section">
      <AdviceNumber number={adviceObject.id} />
      <AdviceText text={adviceObject.advice} />
      <Divider />
      <AdviceGenerator setAdviceObject={setAdviceObject} />
    </div>
  );
}

export default AdviceSection;
