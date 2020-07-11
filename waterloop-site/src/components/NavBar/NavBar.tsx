import React from "react";
import NavbarDesktop from "./NavbarDesktop";
import Sidebar from "./Sidebar";

interface View {
    isDesktop: boolean
}

class Navbar extends React.Component<{}, View> {
    constructor(props = {}) {
        super(props);
        this.state = {
            isDesktop: false
        };
      }

    render() {
        return (this.state.isDesktop ? <NavbarDesktop/> : <Sidebar/>);
    };
}

export default Navbar;
