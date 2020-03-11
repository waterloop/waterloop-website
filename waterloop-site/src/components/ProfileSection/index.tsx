import React from 'react'
import styled from 'styled-components'

import { Profile, PSectionProps, PSectionStates } from './interfaces'
import LeadProfile from '../LeadProfile'

// Styled components for ProfileSection
const ProfileSectionContainer = styled.div`
  margin-bottom: 150px;
`
const MinifiedLeadContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 100px;
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
          <MinifiedLeadContainer>
            {minified.map((profile, i) => {
              const { name, position, portrait, contacts } = profile
              return <LeadProfile
                key={i}
                name={name}
                position={position}
                portrait={portrait}
                contacts={contacts}
                onClick={() => this.ExpandProfile(i)}
              />
            })}
          </MinifiedLeadContainer>
        }

      </ProfileSectionContainer>
    )
  }
}
