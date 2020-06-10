import React from "react";
import "./theme/App.css";
import HypersonicSponsor from "./pages/SponsorPage";
import MainPage from "./pages/MainPage.tsx";

function App() {
  return (
    <div className="App">
      {/* <Test></Test> */}
      <HypersonicSponsor></HypersonicSponsor>
      <MainPage />
    </div>
  );
}

export default App;
