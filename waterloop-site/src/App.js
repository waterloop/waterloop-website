import React from "react";
import "./theme/App.css";
import SponsorList from "./pages/SponsorPage";
import { NavBar } from "components";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Flock from "./pages/Flock";
import Team from "./pages/Team";
import Sponsors from "./pages/Sponsors";
import { Footer } from "sections/Footer";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "typeface-ibm-plex-sans";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/the-flock">
            <Flock />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/sponsors">
            <Sponsors />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
