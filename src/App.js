import React from "react";
import "./App.css";
import "fontsource-roboto";
import TabPanel from "./Tabs";
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <div className="App">
      <header
        style={{
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <div
          style={{
            padding: "4px 4px 2px 4px",
          }}
        >
          <Typography variant="h5">Ozzys burgers</Typography>
        </div>
      </header>
      <TabPanel />
    </div>
  );
}

export default App;
