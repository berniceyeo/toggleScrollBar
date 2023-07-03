import React, { useEffect, useState } from "react";
import { Button } from "../components/Button/Button";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { getApis } from "../services/api";

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
    <div className="App">
      <div className="main-content">
        <Sidebar expanded={expanded} items={providers} />
        <div>
          <div
            onClick={toggleNav}
            className={
              expanded ? "overlay overlay-expanded" : "overlay-content"
            }
          ></div>
          <Button
            $disabled={expanded}
            $color={"rgba(4,157,210)"}
            handleClick={toggleNav}
          >
            Explore web APIs
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
