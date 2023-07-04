import React, { useEffect, useState } from "react";
import { Button } from "../components/Button/Button";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { getApis } from "../services/api";
import ErrorBoundary from "../components/Error/ErrorBoundary";
import { Overlay } from "../components/Overlay/Overlay";
import { EXPLORE_NEW_APIS } from "../utils/constants";

function MainPage() {
  const [expanded, setExpanded] = useState(false);
  const [providers, setProviders] = useState<any>([]);

  useEffect(() => {
    getApis().then((response) => {
      setProviders(response);
    });
  }, []);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  return (
    <ErrorBoundary>
      <div className="App">
        <div className="main-content">
          <Sidebar expanded={expanded} items={providers} />
          <Overlay expanded={expanded} handleClick={toggleNav} />
          <Button
            $disabled={expanded}
            $color={"rgba(4,157,210)"}
            handleClick={toggleNav}
          >
            {EXPLORE_NEW_APIS}
          </Button>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default MainPage;
