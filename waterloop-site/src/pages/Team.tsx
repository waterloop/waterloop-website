import React from "react";
import Hero from "components/Hero/General"
import TeamsDisplayer from "components/TeamsDisplayer"

class Teams extends React.Component {
    render() {
        return (
            <div>
                <Hero title="Meet The Team" description="Learn about our geese."></Hero>
                <TeamsDisplayer initFilterSetting={0} />
            </div>
        );
    }
}

export default Teams;
