import React from 'react'
import styled from 'styled-components'

import { Profile, PSectionProps, PSectionStates } from './interfaces'
import LeadProfile from '../LeadProfile'
import SubProfile from '../SubProfile'

// Styled components for ProfileSection
const ProfileSectionContainer = styled.div`
  margin-bottom: 150px;
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
    & > div {
      margin-bottom: 100px;
    }
  }
`
const MinifiedSubContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 100px;
  &> div:nth-child(3n){
    margin-left: auto;
  }
  &> div:nth-child(3n-1){
    margin-right: auto;
    margin-left: auto;
  }

  @media (max-width: 1065px){
    display: flex;
    flex-direction: column;
    & > div {
      margin-bottom: 100px;
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
            <LeadProfile
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
