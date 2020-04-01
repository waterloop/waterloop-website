import React from 'react';

import './App.css';
import TeamPage from "./pages/TeamPage"

function App() {
  return (
    <div className="App">
      <TeamPage initFilterSetting={0} />
    </div>
  );
}

export default App;
