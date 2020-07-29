import React from "react";
import Hero from "components/Hero/General"
import styled from 'styled-components'
import OurTeam from "components/OurTeam"
import TeamsDisplayer from "components/TeamsDisplayer"

const ContentContainer = styled.div`
  display: block;
  max-width: 1080px;
  margin: 0 auto;
`
const JumpPoint = styled.div`
`
const MiniNav = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`
const MiniNavItem = styled.span`
  margin-right: 20px;
  font-weight: bold;
`

class Teams extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      intro: React.createRef(),
      roster: React.createRef()
    }
  }

  scrollToRef(ref: any) {
    window.scrollTo(0, ref.current.offsetTop)
  }

  render() {
    return (
      <div>
        <Hero title="Meet The Team" description="Learn about our geese." />

        <ContentContainer>
          <MiniNav>
            <MiniNavItem onClick={() => this.scrollToRef(this.state.intro)}><h6>Our Team</h6></MiniNavItem>
            <MiniNavItem><h6> \\ </h6></MiniNavItem>
            <MiniNavItem onClick={() => this.scrollToRef(this.state.roster)}><h6>Team Roster</h6></MiniNavItem>
          </MiniNav>

          <JumpPoint ref={this.state.intro} />
          <OurTeam/>

          <JumpPoint ref={this.state.roster} />
          <TeamsDisplayer initFilterSetting={0} />
        </ContentContainer>
      </div>
    );
  }
}

export default Teams;
