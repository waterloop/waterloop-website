import React from 'react'
import styled from 'styled-components'

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
  return !(
    !member.memberType || !member.memberType.name ||
    !member.subteams || member.subteams.length === 0 ||
    !member.name || !member.name.display
  )
}

// Insert a profile into correct array position as a map value
const insertProfile = (teams: any, teamName: string, member: any) => {
  let memberList = [] as Array<any>
  if (teams.has(teamName)) {
    memberList = teams.get(teamName)


    // Insert Subteam leads to front of array
    if (member.memberType.name === "Subteam Lead") {
      memberList.unshift(member)
    } else {
      memberList.push(member)
    }
  } else {
    memberList = [member]
  }

  // Update map value with new member
  teams.set(teamName, memberList)
}

// group an array of profiles into their respective categories
const groupProfiles = (members: any, teamType: any) => {
  let teams = new Map() as any
  teams.set("Team Leads", [])

  // Insert profile into correct teams
  members.forEach((member: any) => {
    // Ignore incomplete profiles
    if (isProfileComplete(member)) {
      // Group Team Leads by themselves and everyone else according to their teams
      if (member.memberType.name === "Technical Director") {
        insertProfile(teams, "Team Leads", member)
      } else {
        member.subteams.forEach((team: string) => {
          const teamName = teamType.get(team)
          insertProfile(teams, teamName, member)
        })
      }
    }
  })

  return teams
}

export default class TeamPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      teamFilters: Array(5).fill(false),
      toggleOpen: false,
      memberData: new Map() as Map<string, any>,
      subteamIdMap: new Map() as Map<string, string>,
    }

    this.fetchSubteams()
  }

  // fetch subteams
  fetchSubteams () {
    const [ query, options ] = generateFiltersQuery()
    fetch(query as string, options as object)
      .then(res => res.json())
      .then(res => {
        console.log("finished fetching subteam data")
        let newMap = this.state.subteamIdMap
        res.body.subteams.forEach((team: any) => newMap.set(team._id, team.name))
        this.setState({subteamIdMap: newMap})
        this.fetchProfiles()
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
        const groupedProfiles = groupProfiles(res.body, this.state.subteamIdMap) as any
        this.setState({ memberData: groupedProfiles })
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
    const teams = this.state.memberData
    let leads = null as any
    let subteams = null as any

    if (teams.size > 0) {
      leads = teams.get("Team Leads")
      teams.delete("Team Leads")
      subteams = []
      teams.forEach((team: Array<any>, name: string) => {
        subteams.push({title: name, members: team})
      })
    }

    return (
      <Page>
        <TeamProfileFilter
          filters={this.state}
          filterLabels={["ALL TEAMS", "SOFTWARE", "HARDWARE", "ELECTRICAL", "BUSINESS"]}
          updateFilters={(id: number) => this.updateFilters(id)}
          updateToggle={() => this.updateToggle()}
        />

        {leads && <ProfileSection
          title={"Team Leads"}
          profiles={leads}
          profileType={"lead"}
        />}

        {subteams && subteams.map((team: any, i: number) => {
          return <ProfileSection
            key={i}
            title={team.title}
            profiles={team.members}
            profileType={"subteam"}
          />
        })}
      </Page>
    )
  }
}
