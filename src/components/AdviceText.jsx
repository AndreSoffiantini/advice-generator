import React from "react";

function AdviceText(props) {
  return (
    <>
      {props.loading ? (
        <div></div>
      ) : (
        <span className="advice-text">{props.loading ? "" : props.text}</span>
      )}
    </>
  );
}

export default AdviceText;
