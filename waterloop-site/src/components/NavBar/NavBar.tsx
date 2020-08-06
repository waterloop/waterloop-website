import React from "react";
import NavbarDesktop from "./NavbarDesktop";
import Sidebar from "./Sidebar";

interface View {
  width: number;
}

class Navbar extends React.Component<{}, View> {
  constructor(props = {}) {
    super(props);
    this.state = {
      width: window.innerWidth,
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

  render() {
    return this.state.width >= 420 ? <NavbarDesktop /> : <Sidebar />;
  }
}

export default Navbar;
