import React from "react";

const BubleColor = ({
  position,
  blur,
  borderRadius,
  color,
  width,
  height,
  zIndex,
}) => {
  // Calculate dynamic styles based on props
  const dynamicStyles = {
    top: position.top || 0,
    left: position.left || 0,
    right: position.right,
    filter: `blur(${blur || 0}px)`,
    borderRadius: `${borderRadius || 0}px`,
    backgroundColor: `${color || "white"}`,
    width: `${width || 0}px`,
    height: `${height || 0}px`,
    zIndex: zIndex,
  };

  return <div className="absolute " style={dynamicStyles}></div>;
};

export default BubleColor;
