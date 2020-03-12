import React from 'react'
import styled from 'styled-components'

import { ProfileType, PSectionProps, PSectionStates } from './interfaces'
import { SubProfile, LeadProfile, ExpandedProfile } from '../Profiles'

// Styled components for ProfileSection
const ProfileSectionContainer = styled.div`
  margin-bottom: 100px;
`
const MinifiedLeadContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 100px;

  &> div:nth-child(2n){
    margin-left: auto;
  }

  @media (max-width: 1065px){
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

  @media (max-width: 1065px){
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
export default class ProfileSection extends React.Component<PSectionProps, PSectionStates> {
  constructor(props: PSectionProps) {
    super(props)
    this.state = {
      expanded: {} as ProfileType,
      minified: this.props.profiles
    }
  }

  MinifyProfile () {
    this.setState({
      minified: [...this.state.minified, this.state.expanded],
      expanded: {} as ProfileType
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

    // Determine which type of profile to display
    let ProfileContainerTypeTag = MinifiedSubContainer
    let ProfileTypeTag = SubProfile
    if (this.props.profileType === 'lead') {
      ProfileContainerTypeTag = MinifiedLeadContainer
      ProfileTypeTag = LeadProfile
    }

    return (
      <ProfileSectionContainer>
        {
          Object.keys(expanded).length !== 0 &&
          <ExpandedContainer>
            <ExpandedProfile
              name={expanded.name}
              position={expanded.position}
              portrait={expanded.portrait}
              contacts={expanded.contacts}
              onClick={() => this.MinifyProfile()}
            />
          </ExpandedContainer>
        }
        {
          this.state.minified.length > 0 &&
          <ProfileContainerTypeTag>
            {minified.map((profile, i) => {
              const { name, position, portrait, contacts } = profile
                return <ProfileTypeTag
                  key={i}
                  name={name}
                  position={position}
                  portrait={portrait}
                  contacts={contacts}
                  onClick={() => this.ExpandProfile(i)}
                />
            })}
          </ProfileContainerTypeTag>
        }

      </ProfileSectionContainer>
    )
  }
}
