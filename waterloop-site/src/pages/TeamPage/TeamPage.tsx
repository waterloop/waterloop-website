import React from 'react'
import styled from 'styled-components'

import getKeyByValue from '../../utils/getKeyByValue'
import { generateMembersQuery, generateFiltersQuery } from './utils'

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

// Check if member has crucial missing fields
const isProfileComplete = (member: any) => {
  return !(!member.memberType || member.memberType.length === 0 || !member.subteams || member.subteams.length === 0)
}

// Identify any new teams and register them into the Map/Array
const identifyNewTeams = (member: any, map: any, arr: Array<Array<Object>>) => {
  // Team Leads will all be in in the first subarray regardless of their subteam
  // Do not make a new subarray for them since it might remain empty
  if (member.memberType.name === "Technical Director") return

  // Create a new subarray and register index in map for each new subteam
  member.subteams.forEach((team: string) => {
    if (!map.has(team)) {
      map.set(team, arr.length)
      arr.push([])
    }
  })
}

// Insert members into the appropriate subarray(s)
const insertMember = (member: any, map: any, arr: Array<Array<Object>>) => {
  // Insert all Team Leads into the first subarray
  if (member.memberType.name === "Technical Director") {
    arr[0].push(member)
  }
  else {
    // Insert Subteam leads/members into corresonding subarray(s)
    member.subteams.forEach((team: string) => {
      // Insert Subteam Lead members to front of subarray
      if (member.memberType.name === "Subteam Lead") {
        arr[map.get(team)].unshift(member)
      } else {
        arr[map.get(team)].push(member)
      }
    })
  }
}

// Format 1d array of members into 2d array: [[team leads], [subteam 1 members], ... ]
const sortProfiles = (members: any) => {
  let sortedTeams = [[]] as Array<Array<any>>
  let subteamIndex = new Map()

  // Insert members into their corresponding subarrays within sortedTeams
  members.forEach((member: any, key: number) => {
    if (isProfileComplete (member)) {
      identifyNewTeams(member, subteamIndex, sortedTeams)
      insertMember(member, subteamIndex, sortedTeams)
    }
  })

  return [sortedTeams, subteamIndex]
}

export default class TeamPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      teamFilters: Array(5).fill(false),
      toggleOpen: false,
      memberData: [[]] as any,
      subteamIdMap: new Map() as Map<string, string>,
      subteamMap: {} as any
    }

    this.fetchSubteams();
    this.fetchProfiles();
  }

  // fetch subteams
  fetchSubteams() {
    const [ query, options ] = generateFiltersQuery()
    fetch(query as string, options as object)
      .then(res => res.json())
      .then(res => {
        console.log("finished fetching subteam data", res.body.subteams)
        res.body.subteams.forEach((team: any) => {
          let newMap = this.state.subteamIdMap
          newMap.set(team._id, team.name)
          this.setState({subteamIdMap: newMap})
        })
      })
      .catch(err => {
        alert(`Error in fetching filters`)
        console.log(err)
      })
  }

  // fetch data from teamhub
  fetchProfiles() {
    const [query, options] = generateMembersQuery()
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
      alert(`FilterStates now: ${newFilterStates}`)
      return {teamFilters: newFilterStates}
    })
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
          const teamName = `${this.state.subteamIdMap.get(getKeyByValue(this.state.subteamMap, i+1))}`
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
