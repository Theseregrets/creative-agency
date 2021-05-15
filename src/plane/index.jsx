import React, { useRef } from "react";
import "./style.scss";

const Plane = ({ url, title, index, description }) => {
  const planeEl = useRef();
  const direction = index % 2 === 0 ? "direct" : "reverse";
  return (
    <div className={`plane-container ${direction}`}>
      <div className="plane-details">
        <h6>{title}</h6>
        <div className="vertical-line">
          <p>{description}</p>
        </div>
        <div className="plane-image" ref={planeEl}>
          <img
            src={url}
            alt=""
            data-sampler="planeTexture"
            crossOrigin="anonymous"
          />
        </div>
      </div>
    </div>
  );
};

export default Plane;
