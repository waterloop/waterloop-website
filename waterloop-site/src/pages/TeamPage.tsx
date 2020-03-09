import React from 'react'
import styled from 'styled-components'

import LeadProfile from '../components/LeadProfile'
import testData from '../testProfileData'

// Typescript types/interfaces
type Profile = {
  name: string,
  blurb: string,
  portrait: string,
  contacts: Array<{icon: string, url: string}>
}
interface PSectionProps {
  profiles: Array<Profile>
}
interface PSectionStates {
  expanded: Profile,
  minified: Array<Profile>
}

// Styled components for ProfileSection
  const ProfileSectionDisplay = styled.div`
  margin-bottom: 200px;
  width: 100%
`
const MinifiedProfileDisplay = styled.div`
  margin: 25px auto;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
const ExpandedProfileDisplay = styled.div`
  margin: 25px auto;
  width 90%;
`

// Profile Subsection
class ProfileSection extends React.Component<{profiles: Array<Profile>}, PSectionStates> {
  constructor(props: PSectionProps) {
    super(props)
    this.state = {
      expanded: {} as Profile,
      minified: this.props.profiles
    }
  }

  MinifyProfile () {
    this.setState({
      minified: [...this.state.minified, this.state.expanded],
      expanded: {} as Profile
    })
  }

  ExpandProfile (i: number) {
    const target = this.state.minified.splice(i, 1)[0]
    if (Object.keys(this.state.expanded).length !== 0) this.MinifyProfile()
    this.setState({expanded: target})
  }

  render () {
    const expanded = this.state.expanded
    const minified = this.state.minified

    return (
      <ProfileSectionDisplay>
        <ExpandedProfileDisplay>
          {
            Object.keys(expanded).length !== 0 &&
            <LeadProfile
              name={expanded.name}
              blurb={expanded.blurb}
              portrait={expanded.portrait}
              contacts={expanded.contacts}
              onClick={() => this.MinifyProfile()}
            />
          }
        </ExpandedProfileDisplay>
        <MinifiedProfileDisplay>
          {minified.map((profile, i) => {
            const { name, blurb, portrait, contacts } = profile
            return <LeadProfile
              key={i}
              name={name}
              blurb={blurb}
              portrait={portrait}
              contacts={contacts}
              onClick={() => this.ExpandProfile(i)}
            />
          })}
        </MinifiedProfileDisplay>
      </ProfileSectionDisplay>
    )
  }
}

// TeamPage
export default class TeamPage extends React.Component {

  render () {
    console.log(testData)
    return (
      <>
        <ProfileSection profiles={testData.slice(0,3)} />
        <ProfileSection profiles={testData.slice(3,9)} />
      </>
    )
  }
}
