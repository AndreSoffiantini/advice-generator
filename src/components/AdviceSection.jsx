import { React, useState, useEffect } from "react";
import AdviceText from "./AdviceText";
import AdviceGenerator from "./AdviceGenerator";
import AdviceNumber from "./AdviceNumber";
import Divider from "./Divider";

function AdviceSection() {
  const [loading, setLoading] = useState(false);
  const [adviceObject, setAdviceObject] = useState({
    id: null,
    advice: null,
  });

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    const fetchAdvice = async () => {
      if (loading) {
        const response = await fetch("https://api.adviceslip.com/advice");
        const json = await response.json();
        setAdviceObject(json.slip);
      }
    };

    fetchAdvice().then((data) => {
      console.log(data);
      setLoading(false);
    });
  }, [loading]);

  return (
    <div className="advice-section">
      <AdviceNumber number={adviceObject.id} loading={loading} />
      <AdviceText text={adviceObject.advice} loading={loading} />
      <Divider />
      <AdviceGenerator
        setAdviceObject={setAdviceObject}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
}

export default AdviceSection;
