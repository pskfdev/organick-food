import { size } from "lodash";
import React from "react";

type Props = {
    icon: any
    title: string
    des: string
};

function Cardtext({icon, title, des}: Props) {
  return (
    <div className="bg-white m-2 py-4 text-center rounded-4" style={{width: "250px"}}>
      {React.createElement(icon, {size:"28"})}
      <p className="fw-bold text-custom-primary mt-3">{title}</p>
      <p className="text-muted">{des}</p>
    </div>
  );
}

export default Cardtext;
