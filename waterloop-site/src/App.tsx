import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import 'typeface-ibm-plex-sans';

import { Footer } from './sections/Footer';
import JobPostingPage from './components/RecruitmentForm/JobPostingPage';
import { NavBar, SideBar } from './components';
import { STEFooter } from './components/SustainableTech/Footer';
import { STENavBar, STESideBar } from './components/SustainableTech/NavBar';

import Contact from './pages/Contact';
import ErrorPage from 'pages/404';
import Flock from './pages/Flock';
import Home from './pages/Home';
import RecruitmentRouter from 'pages/Recruitment/RecruitmentRouter';
import Sponsors from './pages/Sponsors';
import SustainableTechEvent from 'pages/SustainableTechEvent';
import Team from './pages/Team';

interface State {
  width: number;
  sidebarOpen: boolean;
}

interface PageMap {
  path: string;
  exact: boolean;
  NavBarComponent: React.ReactElement;
  SideBarComponent: React.ReactElement;
  MainComponent: React.ReactElement;
  FooterComponent: React.ReactElement;
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
    this.generatePageMap = this.generatePageMap.bind(this);
  }

  componentDidMount(): void {
    window.addEventListener('resize', this.handleWindowSizeChange);
    document.addEventListener('mousedown', this.handleClick);
  }

  componentWillUnmount(): void {
    window.removeEventListener('resize', this.handleWindowSizeChange);
    document.removeEventListener('mousedown', this.handleClick);
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

  generatePageMap(override: Partial<PageMap>) {
    return {
      path: '/',
      exact: false,
      NavBarComponent: <NavBar />,
      SideBarComponent: (
        <SideBar
          sidebarOpen={this.state.sidebarOpen}
          handleClickSidebar={this.handleClickSidebar}
        />
      ),
      MainComponent: <Home />,
      FooterComponent: <Footer />,
      ...override,
    };
  }

  render(): React.ReactElement {
    const pageMappings: PageMap[] = [
      this.generatePageMap({
        path: '/',
        exact: true,
        MainComponent: <Home />,
      }),
      this.generatePageMap({
        path: '/the-flock',
        MainComponent: <Flock />,
      }),
      this.generatePageMap({
        path: '/team',
        MainComponent: <Team />,
      }),
      this.generatePageMap({
        path: '/sponsors',
        MainComponent: <Sponsors />,
      }),
      this.generatePageMap({
        path: '/green-tech',
        NavBarComponent: <STENavBar />,
        SideBarComponent: <STESideBar />,
        MainComponent: <SustainableTechEvent />,
        FooterComponent: <STEFooter />,
      }),
      this.generatePageMap({
        path: '/contact',
        MainComponent: <Contact />,
      }),
      this.generatePageMap({
        path: '/recruitment',
        MainComponent: <RecruitmentRouter />,
      }),
      this.generatePageMap({
        path: '/posting',
        exact: true,
        MainComponent: <Redirect to="/recruitment" />,
      }),
      this.generatePageMap({
        path: '/posting/:id',
        MainComponent: <JobPostingPage />,
      }),
      this.generatePageMap({
        path: '/404',
        exact: true,
        MainComponent: <ErrorPage />,
      }),
      this.generatePageMap({
        path: '/*',
        MainComponent: <Redirect to="/404" />,
      }),
    ];

    return (
      <div className={this.state.sidebarOpen ? 'app-lock' : ''}>
        <Router>
          <Switch>
            {pageMappings.map((item) => {
              return (
                <Route key={item.path} exact={item.exact} path={item.path}>
                  {this.state.width > 425 ? (
                    item.NavBarComponent
                  ) : (
                    <div ref={this.sidebar}>{item.SideBarComponent}</div>
                  )}
                  {item.MainComponent}
                  {item.FooterComponent}
                </Route>
              );
            })}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
