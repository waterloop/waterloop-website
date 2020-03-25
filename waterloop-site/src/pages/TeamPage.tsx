import React from 'react'
import styled from 'styled-components'

import { ProfileSection } from '../components/Profiles'
import TeamProfileFilter from '../components/TeamFilter'

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

  formatProfiles(data: any) {
    let formatedArray = [[]] as Array<Array<any>>
    let newSubteamMap = new Map()

    // Ignore members with missing team and position fields
    data.forEach((member: any, key: number) => {
      if (!member.memberType || member.memberType.length === 0 ||
          !member.subteams || member.subteams.length === 0) {
          return
      }

      // Add member to array
      const position = `${member.memberType.name}`
      if (position === "Technical Director") formatedArray[0].push(member)
      else {
        // Register new subteams
        member.subteams.forEach((team: string) => {
          if (!newSubteamMap.has(team)) {
            newSubteamMap.set(team, formatedArray.length)
            formatedArray.push([])
          }
          if (position === "Subteam Lead") formatedArray[newSubteamMap.get(team)].unshift(member)
          else formatedArray[newSubteamMap.get(team)].push(member)
        })
      }
    })

    this.setState({subteamMap: newSubteamMap})

    return formatedArray
  }

  generateQueryParams(id: number) {
    if (id === 0) return `members`
    else if (id === 1) return `members/subteams`
    else if (id === 2) return `subteams/Mechanical`
    else if (id === 3) return `subteams/Electrical`
    else if (id === 4) return `subteams/Buisness`
    else return ``
  }

  fetchProfiles (id: number) {
    const params = this.generateQueryParams(id)
    fetch(`https://cors-anywhere.herokuapp.com/https://hub.waterloop.ca/api/${params}`, {
      method: "POST",
      headers: {
        authorization:
          "Bearer 16be4713087d2dab1a481b4e76de87ad9945cd31c385036178dee49adbe244648ee715fb60cdf7fdd4789bd1182f0252884e4d4957adeaed0d02ea37a735a8f1"
      }
    })
    .then(res => res.json())
    .then(
      (res) => {
        console.log("finished fetching member data")
        const formatedData = this.formatProfiles(res.body) as Array<Array<Object>>
        this.setState({
          memberData: formatedData,
        })
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

    this.fetchProfiles(id)
  }

  updateToggle() {
    this.setState((state: any, props: any) => {
      let newToggleState = !this.state.toggleOpen
      return {toggleOpen: newToggleState}
    })
  }

  getKeyByValue(object: any, value: number) {
    return Object.keys(object).find(key => object[key] === value);
  }


  render () {
    const leads = this.state.memberData[0] || []
    const subteams = this.state.memberData ? this.state.memberData.slice(1) : [[]]

    return (
      <Page>
        <TeamProfileFilter
          filters={this.state}
          filterLabels={["ALL TEAMS", "SOFTWARE", "HARDWARE", "ELECTRICAL", "BUISINESS"]}
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
          const teamName = `${subteam[0].subteams[0]}`
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
