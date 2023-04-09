import React from 'react'
import { Link } from "react-router-dom";

function OfferItems({ bg, img, text, color, to }:{bg:string, img:any, text:any, color:any, to:any}) {
  return (
    <Link
      to={to}
      className="rounded-5 d-flex align-items-center"
      style={{
        width: "100%",
        height: "367px",
        background: `url(${bg}) no-repeat`,
        backgroundSize: "cover",
        textDecoration: "none"
      }}
    >
      <div className={`ms-5 w-50 ${color}`}>
        <h2>{img}</h2>
        <h2>{text}</h2>
      </div>
    </Link>
  )
}

export default OfferItems
