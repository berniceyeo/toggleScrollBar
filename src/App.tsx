import React, { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { Sidebar } from "./components/Sidebar/Sidebar";
import axios from "axios";

function App() {
  const [expanded, setExpanded] = useState(false);
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    axios.get("https://api.apis.guru/v2/providers.json").then((response) => {
      // console.log(response.data.data);
      setProviders(response.data.data);
    });
  });

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

export default App;
