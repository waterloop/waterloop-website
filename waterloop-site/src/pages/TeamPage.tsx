import React from 'react'
import styled from 'styled-components'

import { ProfileSection } from '../components/Profiles'
import TeamProfileFitler from '../components/TeamFilter'

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

export default class TeamPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      teamFilters: Array(5).fill(false),
      memberData: 1
    }
  }

  SetFilters (id: number) {
    const newVal = this.state.data + 1
    this.setState({
      memberData: newVal
    })
    alert(`Filter ${id} was just clicked: data has become: ${this.state.memberData}`)
  }

  render () {
    return (
      <Page>
        <TeamProfileFitler filters={this.state.teamFilters} SetFilters={(id: number) => this.SetFilters(id)}/>

        <ProfileSectionTitle>Team Leads</ProfileSectionTitle>
        <ProfileSection profiles={testData.slice(0, 2)} profileType={"lead"}/>

        <ProfileSectionTitle>Subteam 1</ProfileSectionTitle>
        <ProfileSection profiles={testData.slice(2, 8)} profileType={"subteam"}/>

        <ProfileSectionTitle>Subteam 2</ProfileSectionTitle>
        <ProfileSection profiles={testData.slice(8, 14)} profileType={"subteam"}/>
      </Page>
    )
  }
}
