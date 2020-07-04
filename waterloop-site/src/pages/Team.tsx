import React from "react";
import Hero from "components/Hero/General"
import TeamPage from "./TeamsPage"

class Teams extends React.Component {
    render() {
        return (
            <div>
                <Hero title="Meet The Team" description="Learn about our geese."></Hero>
                <TeamPage initFilterSetting={0} />
            </div>
        );
    }
}

export default Teams;
