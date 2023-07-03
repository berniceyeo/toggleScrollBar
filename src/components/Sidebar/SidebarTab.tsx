import React, { ReactNode, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import axios from "axios";
import { ApiInfo } from "../../models";
import { getApi } from "../../services/api";

interface ProtectedProps {
  children?: ReactNode;
  item: string;
  headExpanded: boolean;
}

export const SidebarTab = (props: ProtectedProps) => {
  const item = props.item;
  const [expanded, setExpanded] = useState(false);
  const [details, setDetails] = useState<ApiInfo | undefined>(undefined);

  useEffect(() => {
    setExpanded(false);
  }, [props.headExpanded]);

  const handleClick = async () => {
    if (!expanded) {
      const response = await getApi(item);
      console.log(response);
      setDetails(response?.value);
    }
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
        {details ? details.info.title : ""}
      </div>
    </div>
  );
};
