import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

import { NavBar, SideBar } from "./components";
import JobPostingPage from "./components/RecruitmentForm/JobPostingPage";

import { Footer } from "./sections/Footer";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Flock from "./pages/Flock";
import Team from "./pages/Team";
import Sponsors from "./pages/Sponsors";
import SustainableTechEvent from "pages/SustainableTechEvent";
import RecruitmentRouter from "pages/Recruitment/RecruitmentRouter";

import "typeface-ibm-plex-sans";
import ErrorPage from "pages/404";

interface State {
  width: number;
  sidebarOpen: boolean;
}

class App extends React.Component<{}, State> {
  private sidebar = React.createRef<HTMLDivElement>();

  constructor(props = {}) {
    super(props);
    this.state = {
      width: window.innerWidth,
      sidebarOpen: false,
    };
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
    this.handleClickSidebar = this.handleClickSidebar.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(): void {
    window.addEventListener("resize", this.handleWindowSizeChange);
    document.addEventListener("mousedown", this.handleClick);
  }

  componentWillUnmount(): void {
    window.removeEventListener("resize", this.handleWindowSizeChange);
    document.removeEventListener("mousedown", this.handleClick);
  }

  handleWindowSizeChange(): void {
    this.setState({
      width: window.innerWidth,
    });
  }

  // Open/close the sidebar when the toggle/X button or a link is clicked.
  handleClickSidebar(open: boolean): void {
    this.setState({ sidebarOpen: open });
  }

  // If an element besides the sidebar is clicked, close the sidebar.
  handleClick(event: MouseEvent): void {
    if (
      this.sidebar.current &&
      !this.sidebar.current.contains(event.target as Node)
    ) {
      this.setState({ sidebarOpen: false });
    }
  }

  render(): React.ReactElement {
    return (
      <div className={this.state.sidebarOpen ? "app-lock" : ""}>
        <Router>
          {this.state.width > 425 ? (
            <NavBar />
          ) : (
            <div ref={this.sidebar}>
              <SideBar
                sidebarOpen={this.state.sidebarOpen}
                handleClickSidebar={this.handleClickSidebar}
              />
            </div>
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
            <Route path="/sustainable-tech">
              <SustainableTechEvent />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/recruitment">
              <RecruitmentRouter />
            </Route>
            <Route path="/posting" exact>
              <Redirect to="/recruitment" />
            </Route>
            <Route path="/posting/:id">
              <JobPostingPage />
            </Route>
            <Route path="/404" exact>
              <ErrorPage />
            </Route>
            <Route path="/*">
              <Redirect to="/404" />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
