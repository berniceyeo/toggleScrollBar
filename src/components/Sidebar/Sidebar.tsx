import React, { ReactNode } from "react";
import "./Sidebar.css";
import { SidebarTab } from "./SidebarTab";

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
      {items.map((item, index) => {
        return <SidebarTab item={item} />;
      })}
    </div>
  );
};
