import React from "react";
import TestComponent from "../../pages/TestPage";
// import Home from "../home/home.tsx";
// import GooseV from "../gooseV/gooseV.tsx";
// import Teams from "../teams/teams.tsx";
// import Sponsors from "../sponsors/sponsors.tsx";
// import Media from "../media/media.tsx";
// import Contact from "../contact/contact.tsx";

import { Route, Switch, NavLink } from "react-router-dom";

type Page = { title: string };

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo">
          <img src="../../../public/Icon_Yellow.png" />
        </div>
        <div className="pages">
          <NavLink to={"/"} title="home" exact activeClassName="active">
            HOME
          </NavLink>

          <NavLink to={"/gooseV"} title="gooseV" exact activeClassName="active">
            GOOSE V
          </NavLink>

          <NavLink to={"/teams"} title="teams" exact activeClassName="active">
            TEAMS
          </NavLink>

          <NavLink
            to={"/sponsors"}
            title="sponsors"
            exact
            activeClassName="active"
          >
            SPONSORS
          </NavLink>

          <NavLink to={"/media"} title="media" exact activeClassName="active">
            MEDIA
          </NavLink>

          <NavLink
            to={"/contact"}
            title="contact"
            exact
            activeClassName="active"
          >
            CONTACT
          </NavLink>

          {/* <Switch> */}
            {/* <Route path="/" component={Home} />
              <Route path="/gooseV" component={GooseV} />
              <Route path="/teams" component={Teams} />
              <Route path="/sponsors" component={Sponsors} />
              <Route path="/media" component={Media} />
              <Route path="/contact" component={Contact} /> */}
            <Route path="/" component={TestComponent} />
            <Route path="/gooseV" component={TestComponent} />
            <Route path="/teams" component={TestComponent} />
            <Route path="/sponsors" component={TestComponent} />
            <Route path="/media" component={TestComponent} />
            <Route path="/contact" component={TestComponent} />
          {/* </Switch> */}
        </div>
      </div>
    );
  }
}

export default Navbar;
