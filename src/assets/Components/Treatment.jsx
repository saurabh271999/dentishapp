import React from "react";
import Painfulteething from "./Painfulteething";

import Treatment from "../About.png"



function Treatments() {
  return (
    <div>
      <div>
        <Painfulteething/>
        <img src={ Treatment}/>
      </div>
    </div>
  );
}

export default Treatments;

