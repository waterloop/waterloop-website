import React from 'react'

import testData from '../testProfileData'
import LeadProfile from '../components/LeadProfile'
import MemberProfile from '../components/MemberProfile'

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

// Sample Profile components
const MiniProfile = MemberProfile
const ExpandedProfile = MemberProfile

// Profile Subsection
class ProfileSection extends React.Component<PSectionProps, PSectionStates> {
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
      <div>
        {
          Object.keys(expanded).length !== 0 &&
          <div>
            <ExpandedProfile
              name={expanded.name}
              onClick={() => this.MinifyProfile()}
            />
          </div>
        }
        <div>
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
        </div>
      </div>
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
        <ProfileSection profiles={testData.slice(3,6)} />
        <ProfileSection profiles={testData.slice(6,9)} />
      </>
    )
  }
}
