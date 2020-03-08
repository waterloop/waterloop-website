import React from 'react'
import styled from 'styled-components'
import testData from '../testProfileData'

import MemberProfile from '../components/MemberProfile'

type Profile = {
  name: string,
  position: string,
  blurb: string,
  image: string,
  contact: {
    link: string,
    icon: string
  }
}

interface PSectionProps {
  profiles: Array<Profile>
}

interface PSectionStates {
  expanded: Profile,
  minified: Array<Profile>
}

// Sample Mini Profile component
const MiniProfile = styled(MemberProfile)`
  height: 200px;
  width: 350m;
  padding-left: 100px;
`

const ExpandedProfile = styled(MemberProfile)`
  height: 400px;
  width: 100%
`

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
            const { name, position, image } = profile
            return <MiniProfile
              key={i}
              name={name}
              position={position}
              image={image}
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
    return (
      <>
        <ProfileSection profiles={testData.slice(0,3)} />
        <ProfileSection profiles={testData.slice(3,6)} />
        <ProfileSection profiles={testData.slice(6,9)} />
      </>
    )
  }
}
