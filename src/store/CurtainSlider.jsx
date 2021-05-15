import React from "react";
import "./style.scss";
import Plane from "..plane";

import dumbData from "./dumbData";
import { CurtainsProvider } from "./reduxStore";
import Canvas from "../canvas";

class CurtainSlider extends Component {
  render() {
    return (
      <CurtainsProvider>
        <div className="banner top">
          <div id="page-content">
            {dumbData.map(({ url, title, description }, index) => (
              <Plane
                key={url}
                index={index}
                url={url}
                title={title}
                description={description}
              />
            ))}
          </div>
          <Canvas />
          <div className="banner bottom" />
        </div>
      </CurtainsProvider>
    );
  }
}

export default CurtainSlider;
