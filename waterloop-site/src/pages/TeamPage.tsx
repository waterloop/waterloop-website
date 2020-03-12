import React from 'react'
import styled from 'styled-components'

import { ProfileSection } from '../components/Profiles'

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
  display: block;
  max-width: 1080px;
  margin: 0 auto;

  @media (max-width: 975px){
    display: flex;
    flex-direction: column;
    width: 475px;
    margin: 0 auto;
  }
`

export default class TeamPage extends React.Component {
  render () {
    return (
      <Page>
        <ProfileSectionTitle>Team Leads</ProfileSectionTitle>
        <ProfileSection profiles={testData.slice(0,2)} profileType={"lead"} />

        <ProfileSectionTitle>Subteam 1</ProfileSectionTitle>
        <ProfileSection profiles={testData.slice(2,8)} profileType={"subteam"}/>

        <ProfileSectionTitle>Subteam 2</ProfileSectionTitle>
        <ProfileSection profiles={testData.slice(8,14)} profileType={"subteam"}/>
      </Page>
    )
  }
}
