import React from 'react'
import styled from 'styled-components'

import ProfileSection from '../components/ProfileSection'

import testData from '../testProfileData'

const ProfileSectionTitle = styled.h1`
  font-family: IBM Plex Sans;
  font-style: italic;
  font-weight: 600;
  font-size: 36px;
  line-height: 47px;
  color: #010101;
  margin-bottom: 50px;
`
const Page = styled.div`
  margin: 0 380px;
`

export default class TeamPage extends React.Component {
  render () {
    console.log(testData)
    return (
      <Page>
        <ProfileSectionTitle>Leads 1</ProfileSectionTitle>
        <ProfileSection profiles={testData.slice(0,2)} />

        <ProfileSectionTitle>Leads 2</ProfileSectionTitle>
        <ProfileSection profiles={testData.slice(2,6)} />
      </Page>
    )
  }
}
