import React from "react";
import "./App.scss";
import "fontsource-roboto";
import TabPanel from "./Tabs";

function App() {
  return (
    <div className="App">
      <TabPanel />
      <footer>
        <div
          style={{
            padding: "32px 0 16px 0",
            width: "100%",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              color: "white",
              fontFamily: "'Fredoka One', cursive",
              letterSpacing: "2px",
            }}
          >
            Thank you for choosing <br /> Ozzy's Burgers 🍔
          </h3>
        </div>
      </footer>
    </div>
  );
}

export default App;
