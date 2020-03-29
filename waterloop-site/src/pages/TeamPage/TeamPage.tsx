import React from 'react'
import styled from 'styled-components'

import getKeyByValue from '../../utils/getKeyByValue'
import {
  sortProfiles,
  generateMembersQuery,
  generateFiltersQuery
} from './utils'

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
      subteamMap: {} as any,
      subteamServerId: new Map() as Map<string, string>
    }

    // TODO: Replace the arg with a prop once the intro team page is done.
    this.fetchProfiles(0);
    this.fetchSubteams();

  }

  // fetch subteams
  fetchSubteams() {
    const [ query, options ] = generateFiltersQuery()
    fetch(query as string, options as object)
      .then(res => res.json())
      .then(res => {
        console.log("finished fetching subteam data", res.body.subteams)
        res.body.subteams.forEach((team: any) => {
          let newMap = this.state.subteamServerId
          newMap.set(team._id, team.name)
          this.setState({subteamServerId: newMap})
        })
      })
      .catch(err => {
        alert(`Error in fetching filters`)
        console.log(err)
      })
  }

  // fetch data from teamhub
  fetchProfiles(id: number) {
    const [query, options] = generateMembersQuery(id)
    fetch(query as string, options as object)
      .then(res => res.json())
      .then(res => {
        console.log("finished fetching member data")
        const [formatedData, newSubteamMap] = sortProfiles(res.body) as any

        this.setState({
          memberData: formatedData,
          subteamMap: newSubteamMap
        })
      })
      .catch(err => {
        alert(`Error in fetching members`)
        console.log(err)
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

        {leads.length > 0 && <ProfileSection
          title={"Team Leads"}
          profiles={leads}
          profileType={"lead"}
        />}

        {subteams.length > 0 && subteams.map((subteam: any, i: number) => {
          const teamName = `${this.state.subteamServerId.get(getKeyByValue(this.state.subteamMap, i+1))}`
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
