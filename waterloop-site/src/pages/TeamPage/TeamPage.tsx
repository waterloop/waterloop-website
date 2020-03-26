import React from 'react'
import styled from 'styled-components'

import {sortProfiles, generateQueryParams} from './utils'
import getKeyByValue from '../../utils/getKeyByValue'


import { ProfileSection } from '../../components/Profiles'
import TeamProfileFilter from '../../components/TeamFilter'

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
      memberData: [[]] as any,
      toggleOpen: false,
      subteamMap: {} as any
    }
    this.fetchProfiles(0);
  }

  // fetch data from teamhub
  fetchProfiles(id: number) {
    const [query, options] = generateQueryParams(id)
    fetch(query as string, options as object)
    .then(res => res.json())
    .then(
      res => {
        // Update state variables
        console.log("finished fetching member data")
        const [formatedData, newSubteamMap] = sortProfiles(res.body) as any
        this.setState({
          memberData: formatedData,
          subteamMap: newSubteamMap
        })
      },
      err => {
        // Alert in case of fetch error
        alert(`Error in fetchiing profiles: ${err}`)
    })
  }

  // Update filter states to refine members show on page
  updateFilters(id: number) {
    let newFilterStates = this.state.teamFilters
    newFilterStates[id] = !newFilterStates[id]

    this.setState((state: any, props: any) => {
      console.log(`FilterStates now: ${newFilterStates}`)
      return {displayedData: newFilterStates}
    })

    this.fetchProfiles(id)
  }

  // Update mobile menu toggle status
  updateToggle() {
    this.setState((state: any, props: any) => {
      let newToggleState = !this.state.toggleOpen
      return {toggleOpen: newToggleState}
    })
  }

  render() {
    const leads = this.state.memberData[0] || []
    const subteams = this.state.memberData ? this.state.memberData.slice(1) : [[]]

    return (
      <Page>
        <TeamProfileFilter
          filters={this.state}
          filterLabels={["ALL TEAMS", "SOFTWARE", "HARDWARE", "ELECTRICAL", "BUSINESS"]}
          updateFilters={(id: number) => this.updateFilters(id)}
          updateToggle={() => this.updateToggle()}
        />

        {leads.length > 0 && <>
          <ProfileSection
            title={"Team Leads"}
            profiles={leads}
            profileType={"lead"}/>
        </>}

        {subteams.length > 0 && subteams.map((subteam: any, i: number) => {
          const teamName = `${getKeyByValue(this.state.subteamMap, i+1)}`
          return <ProfileSection
            key={i}
            title={teamName}
            profiles={subteam}
            profileType={"subteam"}
          />
        })}
      </Page>
    )
  }
}
