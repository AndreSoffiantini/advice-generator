/* import dividerDesktop from "../assets/images/pattern-divider-desktop.svg";
import dividerMobile from "../assets/images/pattern-divider-mobile.svg"; */

import React from "react";

function Divider(props) {
  return <>{props.loading ? <div></div> : <div className="divider"></div>}</>;
}

export default Divider;
