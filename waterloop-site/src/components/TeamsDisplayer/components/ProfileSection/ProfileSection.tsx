import React from 'react'
import styled from 'styled-components'

// Types and interfaces
import { ProfileType } from '../../interfaces'
import { PSectionProps, PSectionState } from '../interfaces'
import { SubProfile, LeadProfile, ExpandedProfile } from '../Profiles'

// Styled components for ProfileSection
const ProfileSectionTitle = styled.h5`
  font-family: IBM Plex Sans;
  font-style: italic;
  font-weight: 600;
  font-size: 36px;
  color: #010101;
  margin-bottom: 50px;
`
const ProfileSectionContainer = styled.div`
  margin-bottom: 100px;
`
const MinifiedContainer = styled.div`
  display: grid;
  grid-row-gap: 100px;

  @media (max-width: 975px){
    display: flex;
    flex-direction: column;

    & > div:nth-child(1) {
      margin-top: 0;
    }

    & > div {
      margin-top: 100px;
    }
  }
`
const MinifiedLeadContainer = styled(MinifiedContainer)`
  grid-template-columns: repeat(2, 1fr);

  &> div:nth-child(2n){
    margin-left: auto;
  }
`
const MinifiedSubContainer = styled(MinifiedContainer)`
  grid-template-columns: repeat(3, 1fr);

  & > div:nth-child(3n-1){
    margin-left: 0 auto 0 auto;
  }
`
const ExpandedContainer = styled.div`
  width: 100%;
  margin-bottom: 100px;
`
const TeamDescription = styled.h6`
  margin-bottom: 60px;
  font-family: IBM Plex Sans;
  font-style: normal;
`

// Profile Subsection
export default class ProfileSection extends React.Component<PSectionProps, PSectionState> {
  constructor(props: PSectionProps) {
    super(props)
    this.state = {
      expanded: {} as ProfileType,
      minified: this.props.profiles
    }
  }

  // Update states upon recieving new props
  UNSAFE_componentWillReceiveProps(nextProps: PSectionProps) {
    this.setState({
      minified: nextProps.profiles,
      expanded: {} as ProfileType
    })
  }

  // Return the profile from the Expanded Profile slot back into the minfied list
  minifyProfile() {
    this.setState({
      minified: [...this.state.minified, this.state.expanded],
      expanded: {} as ProfileType
    })
  }

  // Move selected profile from minifie list into the Expansion Profile slot
  expandProfile(i: number) {
    const target = this.state.minified.splice(i, 1)[0]
    if (Object.keys(this.state.expanded).length !== 0) this.minifyProfile()
    this.setState({expanded: target})
  }

  render() {
    const expanded = this.state.expanded
    const minified = this.state.minified

    // Determine to display a Lead Profile or Sub Profile
    let ProfileContainerTypeTag = MinifiedSubContainer
    let ProfileTypeTag = SubProfile
    if (this.props.profileType === 'lead') {
      ProfileContainerTypeTag = MinifiedLeadContainer
      ProfileTypeTag = LeadProfile
    }

    return (
      <ProfileSectionContainer>
        {this.props.title && <ProfileSectionTitle>{this.props.title}</ProfileSectionTitle>}

        <TeamDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.
        </TeamDescription>

        { // Expanded Profile Slot
          Object.keys(expanded).length !== 0 &&
          <ExpandedContainer>
            <ExpandedProfile
              name={expanded.name}
              position={expanded.position}
              programInfo={expanded.programInfo}
              teams={expanded.teams}
              bio={expanded.bio}
              portrait={expanded.portrait}
              contacts={expanded.contacts}
              onClick={() => this.minifyProfile()}
            />
          </ExpandedContainer>
        }

        { // Dynamically insert minified profiles
          minified.length > 0 &&
          <ProfileContainerTypeTag>
            {minified.map((profile: ProfileType, i: number) => {
              return <ProfileTypeTag
                key={i}
                name={profile.name}
                position={profile.position}
                portrait={profile.portrait}
                contacts={profile.contacts}
                onClick={() => this.expandProfile(i)}
              />
            })}
          </ProfileContainerTypeTag>
        }
      </ProfileSectionContainer>
    )
  }
}
