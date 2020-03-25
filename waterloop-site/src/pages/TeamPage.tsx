import React from 'react'
import styled from 'styled-components'

import { ProfileSection } from '../components/Profiles'
import TeamProfileFilter from '../components/TeamFilter'

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
      memberData: {} as any,
      toggleOpen: false,
    }

    this.fetchProfiles();
  }

  fetchProfiles () {
    fetch(`https://cors-anywhere.herokuapp.com/https://hub.waterloop.ca/api/members`, {
      method: "POST",
      headers: {
        authorization:
          "Bearer 16be4713087d2dab1a481b4e76de87ad9945cd31c385036178dee49adbe244648ee715fb60cdf7fdd4789bd1182f0252884e4d4957adeaed0d02ea37a735a8f1"
      }
    })
    .then(res => res.json())
    .then(
      (res) => {
        this.setState({memberData: res})
        console.log(res)
      },
      (err) => alert(`Something just went wrong. Profiles were not fetched.`)
    )
  }

  updateFilters (id: number) {
    let newFilterStates = this.state.teamFilters
    newFilterStates[id] = !newFilterStates[id]

    this.setState((state: any, props: any) => {
      console.log(`FilterStates now: ${newFilterStates}`)
      return {displayedData: newFilterStates}
    })

    this.fetchProfiles()
  }

  updateToggle() {
    this.setState((state: any, props: any) => {
      let newToggleState = !this.state.toggleOpen
      return {toggleOpen: newToggleState}
    })
  }

  render () {
    return (
      <Page>
        <TeamProfileFilter filters={this.state} updateFilters={(id: number) => this.updateFilters(id)} updateToggle={() => this.updateToggle()}/>

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
