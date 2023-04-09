import React from "react";


function BannerSm({bgLeft, bgRight, title}:{bgLeft:any, bgRight:any, title:any}) {
  return (
    <div
      className="border d-flex justify-content-center align-items-center"
      style={{
        height: "40vh",
        background: `url(${bgLeft}) left top no-repeat, url(${bgRight}) right top no-repeat`,
        backgroundColor: `#F1EFF0`,
        objectFit: `cover`
      }}
    >
      <div className="text-center w-lg-25 w-100 text-custom-primary">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default BannerSm;
