import React, { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  const items = ["1forge.com", "1password.com"];
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="App">
      <div className="main-content">
        <Sidebar expanded={expanded} items={items} />
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

export default App;
