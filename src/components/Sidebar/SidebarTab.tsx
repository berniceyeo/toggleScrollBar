import React, { ReactNode, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

interface ProtectedProps {
  children?: ReactNode;
  item: string;
}

export const SidebarTab = (props: ProtectedProps) => {
  const item = props.item;
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={expanded ? "tab tab-header-expanded" : "tab"}>
      <div className={"tab-header"} onClick={handleClick}>
        <div className={"tab-header-name"}>{item ? item : ""}</div>
        <div className={"tab-header-icon"}>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
      <div className={expanded ? "tab-section tab-expanded" : "tab-section"}>
        {item ? item : ""}
      </div>
    </div>
  );
};
