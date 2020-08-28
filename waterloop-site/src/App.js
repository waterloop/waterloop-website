import React from "react";
import "./theme/App.css";
import { NavBar, SideBar } from "components";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Flock from "./pages/Flock";
import Team from "./pages/Team";
import Sponsors from "./pages/Sponsors";
import {Recruitment} from "./pages/Recruitment";
import { Footer } from "sections/Footer";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "typeface-ibm-plex-sans";
import JobPosting from './components/RecruitmentForm/JobPosting';
import JobPostingPage from './components/RecruitmentForm/JobPostingPage';
class App extends React.Component {
  constructor(props = {}) {
    super(props);
    this.state = {
      width: window.innerWidth,
      lock: false,
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({
      width: window.innerWidth,
    });
  };

  handleClick(closed) {
    closed ? this.setState({ lock: false }) : this.setState({ lock: true });
  }

  render() {
    return (
      <div className={this.state.lock ? "app-lock" : ""}>
        <Router>
          {this.state.width > 425 ? (
            <NavBar />
          ) : (
            <SideBar handleClick={this.handleClick.bind(this)} />
          )}
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
            <Route path="/recruitment">
              <Recruitment />
            </Route>
            <Route path="/posting/:id">
              <JobPostingPage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
