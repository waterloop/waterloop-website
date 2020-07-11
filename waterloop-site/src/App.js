import React from "react";
import "./theme/App.css";
import Test from "./pages/TestPage.tsx";
import SponsorList from "./pages/SponsorPage";

function App() {
  return (
    <div className="App">
      {/* <Test></Test> */}
      <SponsorList />
    </div>
  );
}

export default App;
