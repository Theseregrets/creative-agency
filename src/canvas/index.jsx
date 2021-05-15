import React, { useRef, useContext } from "react";

const Canvas = () => {
  const container = useRef();
  const { state, dispatch } = useContext(CurtainsContext);

  useLayoutEffect(() => {
    const { curtains } = state;
    if (container.current && !curtains.container) {
    }
    return () => {
      cleanup;
    };
  }, [container, state, dispatch]);

  return <div className="Canvas" ref={container}></div>;
};

export default Canvas;
