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

// Profile Subsection
class ProfileSection extends React.Component<PSectionProps, PSectionStates> {
  constructor(props: PSectionProps) {
    super(props)
    this.state = {
      expanded: {} as Profile,
      minified: this.props.profiles
    }
  }

  ExpandProfile (i: number) {
    alert(`PROFILE ${i} was clicked`)
    this.setState({expanded: this.state.minified.splice(i, 1)[0]})
    console.log(`expanded: ${this.state.expanded}`);
    console.log(`minified: ${this.state.minified}`);
  }

  render () {
    return (
      <div style={{border: "thick solid #000000", height: "3em"}}>
        {this.state.minified.map((profile, i) => {
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
