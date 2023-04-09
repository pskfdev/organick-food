import React from 'react'

function Icontext({ title, des, icon }:{title:string, des:string, icon:any}) {
  return (
    <div className="d-flex align-items-center w-75">
      <div className="mx-4">
        <img src={icon} style={{ minWidth: "20px" }} alt={title} />
      </div>
      <div>
        <p>
          <span className="fw-bold">{title}</span>
          <br />
          {des}
        </p>
      </div>
    </div>
  )
}

export default Icontext
