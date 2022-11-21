import React from "react";

function AdviceText(props) {
  return (
    <>
      {props.loading ? (
        <div className="spinner"></div>
      ) : (
        <h1 className="advice-text">"{props.text}"</h1>
      )}
    </>
  );
}

export default AdviceText;
