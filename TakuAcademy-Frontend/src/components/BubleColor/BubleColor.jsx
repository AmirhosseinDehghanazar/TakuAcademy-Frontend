import React from "react";
import "./buble.css";

const BubleColor = ({
  position,
  blur,
  borderRadius,
  color,
  width,
  height,
  zIndex,
  translateX,
}) => {
  // Calculate dynamic styles based on props
  const dynamicStyles = {
    top: position.top || 0,
    left: position.left || 0,
    right: position.right,
    borderRadius: `${borderRadius || 0}px`,
    backgroundColor: `${color || "white"}`,
    height: `${height || 0}px`,
    zIndex: zIndex,
  };

  return <div className="absolute buble" style={dynamicStyles}></div>;
};

export default BubleColor;
