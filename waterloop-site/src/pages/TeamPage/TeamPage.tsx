import React from 'react'
import styled from 'styled-components'

// Types and interfaces
import ProfileType from '../../interfaces'
import { QueryData, SubteamProps, TeamPageProps, TeamPageState } from './interfaces'

// Components
import { ProfileSection } from '../../components/Profiles'
import TeamProfileFilter from '../../components/TeamFilter'

// Utility
import { sortProfiles, applyTeamFilters } from './utils'
import { generateMembersQuery, generateFiltersQuery } from './api'

// Styled components for ProfileSection
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

export default class TeamPage extends React.Component<TeamPageProps, TeamPageState> {
  constructor(props: TeamPageProps) {
    super(props)
    this.state = {
      teamFilters: Array(5).fill(false),
      teamFilterLabels: ["ALL TEAMS", "SOFTWARE", "HARDWARE", "ELECTRICAL", "BUSINESS"],
      toggleOpen: false,
      memberData: new Map(),
      subteamIdMap: new Map(),
    }
  }

  // Initialization
  componentDidMount() {
    this.fetchSubteams()
    this.updateFilters(this.props.initFilterSetting)
  }

  // fetch subteams
  fetchSubteams() {
    const [ query, options ] = generateFiltersQuery()
    fetch(query as string, options as object)
      .then(res => res.json())
      .then(res => {
        console.log("finished fetching subteam data")
        let newMap = this.state.subteamIdMap
        res.body.subteams.forEach((team: QueryData) => newMap.set(team._id, team.name))
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
        const groupedProfiles = sortProfiles(res.body, this.state.subteamIdMap) as Map<string, Array<ProfileType>>
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
    else {
      let sum = 0
      newFilterStates.forEach((res: boolean) => {
        const num = res ? 1 : 0;
        sum = sum + num
      })
      if (sum === 0) {
        newFilterStates[0] = true
      }
    }

    this.setState({ teamFilters: newFilterStates })
  }

  // Update mobile menu toggle status
  updateToggle() {
    this.setState((state: TeamPageState) => {
      let newToggleState = !this.state.toggleOpen
      return {toggleOpen: newToggleState}
    })
  }

  render() {
    let teams = this.state.memberData
    let leads = [] as Array<ProfileType>
    let subteams = [] as Array<SubteamProps>

    // Populate teams with profiles after request finishes
    if (teams.size > 0) {
      // Apply filters
      const filteredTeams = applyTeamFilters(teams, this.state.teamFilters)
      if (filteredTeams.has("Team Leads")) {
        leads = filteredTeams.get("Team Leads") as Array<ProfileType>
      }
      filteredTeams.forEach((team: Array<ProfileType>, name: string) => {
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

        {subteams.length > 0 && subteams.map((team: {title: string, members: Array<ProfileType>}, i: number) => {
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
