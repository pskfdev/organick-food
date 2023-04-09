import React from "react";

function ProductHero({ bg, text }: { bg: string; text: string }) {
  return (
    <div
      className="d-flex justify-content-center align-items-center rounded-5"
      style={{
        width: "100%",
        height: "600px",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="rounded-5 bg-white py-3 px-5 text-custom-primary">
        <h3>{text}</h3>
      </div>
    </div>
  );
}

export default ProductHero;
