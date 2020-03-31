import React from 'react'
import styled from 'styled-components'

// import { ProfileType, PSectionProps, PSectionStates } from '../interfaces'
import { SubProfile, LeadProfile, ExpandedProfile } from '../../Profiles'

// Styled components for ProfileSection
const ProfileSectionTitle = styled.h1`
  font-family: IBM Plex Sans;
  font-style: italic;
  font-weight: 600;
  font-size: 36px;
  line-height: 47px;
  color: #010101;
  margin-bottom: 50px;
`
const ProfileSectionContainer = styled.div`
  margin-bottom: 100px;
`
const MinifiedLeadContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 100px;

  &> div:nth-child(2n){
    margin-left: auto;
  }

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
const MinifiedSubContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 100px;

  & > div:nth-child(3n-1){
    margin-left: 0 auto 0 auto;
  }

  @media (max-width: 975px){
    display: flex;
    flex-direction: column;

    & > div:nth-child(1) {
      margin-top: 0;
    }
    & > div {
      width: 475px;
      height: 265px;
      margin-left: 0;
      margin-right: auto;
      margin-top: 100px
    }
  }
`
const ExpandedContainer = styled.div`
  width: 100%;
  margin-bottom: 100px;
`

// Profile Subsection
export default class ProfileSection extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      expanded: {} as any,
      minified: this.props.profiles
    }
  }

  // Update states upon recieving new props
  UNSAFE_componentWillReceiveProps(nextProps:  any) {
    this.setState({minified: nextProps.profiles})
  }

  // Return the profile from the Expanded Profile slot back into the minfied list
  minifyProfile() {
    this.setState({
      minified: [...this.state.minified, this.state.expanded],
      expanded: {} as any
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
            {minified.map((profile: any, i: any) => {
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
