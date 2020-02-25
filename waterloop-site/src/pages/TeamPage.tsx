import React from 'react'

const testData = {
  name: "name",
  position: "position",
  blurb: "blurb",
  image: "image",
  contact: {
    link: "link",
    icon: "icon"
  }
}

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

// Sample Expanded (Big) Profile component
const ExpandedProfile = (props: any) => {
  return (
    <span style={
      {
        display: "flex",
        border: "thick solid #000000",
      }}>
      <p>This is an Expanded profile</p>
    </span>
  )
}

// Sample Mini Profile component
const MiniProfile = (props: any) => {
  return (
    <span
      onClick={props.onClick}
      style={{paddingLeft: "1em"}}
      >
      {props.name}
    </span>
  )
}

interface PSectionProps {
  profiles: Array<Profile>
}

interface PSectionStates {
  expanded: Profile,
  minified: Array<Profile>
}

// Profile Subsection
class ProfileSection extends React.Component<PSectionProps, PSectionStates> {
  constructor(props: PSectionProps) {
    super(props)
    this.state = {
      expanded: null,
      minified: this.props.profiles
    }
  }

  ExpandProfile (i: number) {
    alert(`PROFILE ${i} was clicked`)
    this.setState({expanded: this.state.minified[i]});
    this.setState({minified: this.state.minified.slice(i, 1)});
    console.log(this.state.expanded);
  }

  render () {
    return (
      <div style={{border: "thick solid #000000", height: "3em"}}>
        {this.state.minified.map((profile, i) => {
          const { name, position, image } = profile
          return <MiniProfile
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
        <ProfileSection profiles={[testData, testData, testData]} />
        <ProfileSection profiles={[testData, testData, testData]} />
        <ProfileSection profiles={[testData, testData, testData]} />
      </>
    )
  }
}
