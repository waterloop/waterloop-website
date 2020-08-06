import React from "react";
import "./theme/App.css";
import { NavBar, SideBar } from "components";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Flock from "./pages/Flock";
import Team from "./pages/Team";
import Sponsors from "./pages/Sponsors";
// import NavBar from "./components/NavBar/NavBar";
// import Sidebar from "./components/NavBar/Sidebar";
import { Footer } from "sections/Footer";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "typeface-ibm-plex-sans";
class App extends React.Component {
  constructor(props = {}) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
  }

  toggleLock = () => {};
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({
      width: window.innerWidth,
    });
  };

  render() {
    return (
      <div className="App">
        <Router>
          {this.state.width >= 420 ? <NavBar /> : <SideBar />}
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
}

export default App;
