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
          <h3 style={{ color: "white", fontFamily: "'Fredoka One', cursive", letterSpacing: "2px" }}>
            Thank you for choosing Ozzy's burgers.
          </h3>
          <a
            href="https://www.carlosznava.com"
            style={{
              fontSize: "6px",
              color: "white",
              fontFamily: "Arial",
              marginTop: "10px",
              textDecoration: "none"
            }}
          >
            Created by Carlos Zuniga.
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
