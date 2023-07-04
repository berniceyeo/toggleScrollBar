import React from "react";
import "./Overlay.css";

interface ProtectedProps {
  handleClick?: React.MouseEventHandler;
  expanded: boolean;
  children?: React.ReactNode;
}

export const Overlay = (props: ProtectedProps) => {
  return (
    <div
      onClick={props.handleClick}
      className={props.expanded ? "overlay overlay-expanded" : "overlay"}
    ></div>
  );
};
