import React from "react";
import "./App.css";
import PastGeese from "./components/past-geese-timeline/past-geese-timeline.component";
require("dotenv").config();

function App() {
  return (
    <div className="App">
      <PastGeese />
    </div>
  );
}

export default App;
