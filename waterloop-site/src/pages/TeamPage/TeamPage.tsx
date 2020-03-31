import React from 'react'
import styled from 'styled-components'

import { ProfileSection } from '../../components/Profiles'
import TeamProfileFilter from '../../components/TeamFilter'

import { generateMembersQuery, generateFiltersQuery } from './utils'
import testData from '../../testProfileData'

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

// Create a profile from member data
const buildProfile = (member: any, teamType: Map<string, string>) => {
  const links = member.links.length > 0 ? member.links : testData[0].contacts
  const teams = member.subteams.map((team: any) => teamType.get(team))

  // Generate program description with missing fields in mind
  let program = member.program || 'Student'
  if (member.stream && member.stream.currentSchoolTerm) {
    program = `${member.stream.currentSchoolTerm} ${program}`
  }

  return {
    name: member.name.display,
    position: member.memberType.name,
    programInfo: program,
    portrait: member.imageUrl,
    teams: teams,
    bio: member.bio,
    contacts: links
  }
}

// Insert a profile into correct array position as a map value
const insertProfileToMap = (teams: Map<string, Array<any>>, teamName: string, member: any) => {
  let memberList = [] as Array<any>

  // Add member to array
  if (teams.has(teamName)) {
    memberList = teams.get(teamName) as Array<any>

    // Insert Subteam leads to front of array
    if (member.position === "Subteam Lead") {
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

// Group an array of profiles into their respective categories
const groupProfiles = (members: any, teamType: Map<string, string>) => {
  let teams = new Map() as any
  teams.set("Team Leads", [])

  // Insert profile into correct teams
  members.forEach((member: any) => {
    // Ignore incomplete profiles
    if (isProfileComplete(member)) {
      // create a profile
      const profile = buildProfile(member, teamType)

      // Set a side a Team Leads subarray
      if (member.memberType.name === "Technical Director") {
        insertProfileToMap(teams, "Team Leads", profile)
      }
      // Group Members by their subteams
      else {
        member.subteams.forEach((team: string) => {
          const teamName = teamType.get(team) as string
          insertProfileToMap(teams, teamName, profile)
        })
      }
    }
  })

  return teams
}

// check if filter applies or not
const checkWithinTeamFilters = (name: string, teamFilters: Array<boolean>) => {
  if (!teamFilters[0]){
    if (!teamFilters[1] && (name === "Software" || name ===  "Infrastructure")) {
      return false
    }
    if (!teamFilters[2] && name === "Mechanical") {
      return false
    }
    if (!teamFilters[3] && name === "Electrical") {
      return false
    }
    if (!teamFilters[4] && (name === "Admin" || name === "Exec")) {
      return false
    }
  }
  return true
}

// Apply team filters to data set
const applyTeamFilters = (teams: Map<string, Array<any>>, teamFilters: Array<boolean>) => {
  let filteredTeams = new Map() as Map<string, any>

  teams.forEach((team: any, teamName: string) => {
    if (teamName === "Team Leads") {
      team.forEach((member: any) => {
        for (let i = 0; i < member.teams.length; i++) {
          if (checkWithinTeamFilters(member.teams[i], teamFilters)) {
            insertProfileToMap(filteredTeams, teamName, member)
            break
          }
        }
      })
    }
    else if (checkWithinTeamFilters(teamName, teamFilters)) {
      filteredTeams.set(teamName, team)
    }
  })

  return filteredTeams
}

export default class TeamPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      teamFilters: Array(5).fill(false),
      teamFilterLabels: ["ALL TEAMS", "SOFTWARE", "HARDWARE", "ELECTRICAL", "BUSINESS"],
      toggleOpen: false,
      memberData: new Map() as Map<string, any>,
      subteamIdMap: new Map() as Map<string, string>,
    }
  }

  // Initialization
  componentDidMount() {
    this.fetchSubteams()
    this.updateFilters(0)
  }

  // fetch subteams
  fetchSubteams() {
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

    // Activating all teams removes all filters
    if (id === 0) {
      if (newFilterStates[id]){
        newFilterStates = newFilterStates.map((value: Boolean, i: number) => i === 0)
      }
      // All Teams can only be deactivated by activating another filter
      else {
        newFilterStates[0] = true
      }
    }
    // Automatically clear All Teams filter if another filter is activated
    else if (id !== 0 && newFilterStates[id]) {
      newFilterStates[0] = false
    }

    this.setState((state: any, props: any) => {
      // alert(`FilterStates now: ${newFilterStates}`)
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
    let teams = this.state.memberData
    let leads = [] as any
    let subteams = [] as any

    // Populate teams with profiles after request finishes
    if (teams.size > 0) {
      // Apply filters
      const filteredTeams = applyTeamFilters(teams, this.state.teamFilters)
      if (filteredTeams.has("Team Leads")) {
        leads = filteredTeams.get("Team Leads")
      }
      filteredTeams.forEach((team: Array<any>, name: string) => {
        if (name !== "Team Leads") {
          subteams.push({title: name, members: team})
        }
      })
    }

    return (
      <Page>
        <TeamProfileFilter
          filters={this.state}
          filterLabels={this.state.teamFilterLabels}
          updateFilters={(id: number) => this.updateFilters(id)}
          updateToggle={() => this.updateToggle()}
        />

        {leads.length > 0 && <ProfileSection
          title={"Team Leads"}
          profiles={leads}
          profileType={"lead"}
        />}

        {subteams.length > 0 && subteams.map((team: any, i: number) => {
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
