import React, { ReactNode } from "react";
import "./Sidebar.css";

interface ProtectedProps {
  children?: ReactNode;
  items: Array<string>;
  expanded: boolean;
}

export const Sidebar = (props: ProtectedProps) => {
  const items = props.items;

  return (
    <div className={props.expanded ? "sidebar sidebar-expanded" : "sidebar"}>
      <div className="header">Select Provider</div>
      {items.map((item) => {
        return <div className="tab">{item ? item : ""}</div>;
      })}
    </div>
  );
};
