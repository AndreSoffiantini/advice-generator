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
  const [intervalId, setIntervalId] = useState(0);

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    const newInterval = setInterval(() => {
      setLoading(true);
    }, 60000);
    setIntervalId(newInterval);
  }, []);

  useEffect(() => {
    const fetchAdvice = async () => {
      if (loading) {
        const response = await fetch("https://api.adviceslip.com/advice", {
          cache: "no-cache",
        });
        const json = await response.json();
        setAdviceObject(json.slip);
        setLoading(false);
      }
    };

    fetchAdvice();
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
        intervalId={intervalId}
        setIntervalId={setIntervalId}
      />
    </div>
  );
}

export default AdviceSection;
