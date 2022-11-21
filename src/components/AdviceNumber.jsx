import React from "react";

function AdviceNumber(props) {
  return (
    <>
      <div className="advice-number">
        {props.loading ? "" : "Advice #" + props.number}
      </div>
    </>
  );
}

export default AdviceNumber;
