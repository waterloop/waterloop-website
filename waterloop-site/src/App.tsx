import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import { NavBar, SideBar } from './components';
import JobPostingPage from './components/RecruitmentForm/JobPostingPage';

import { Footer } from './sections/Footer';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Flock from './pages/Flock';
import Team from './pages/Team';
import Sponsors from './pages/Sponsors';
import Recruitment from './pages/Recruitment';

import 'typeface-ibm-plex-sans';

interface State {
  width: number;
  lock: boolean;
};

class App extends React.Component<{}, State> {
  constructor(props = {}) {
    super(props);
    this.state = {
      width: window.innerWidth,
      lock: false,
    };
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
  }

  componentDidMount(): void {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount(): void {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange(): void {
    this.setState({
      width: window.innerWidth,
    });
  }

  handleClick(closed: boolean): void {
    this.setState({ lock: !closed });
  }

  render(): React.ReactElement {
    return (
      <div className={this.state.lock ? 'app-lock' : ''}>
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
