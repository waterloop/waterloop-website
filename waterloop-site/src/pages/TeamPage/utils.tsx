// Interfaces
import ProfileType from '../../interfaces'
import { QueryData } from './interfaces'

// Test data
import testData from '../../testProfileData'

// Check if member has crucial missing fields
const isProfileComplete = (member: QueryData) => {
  return !(
    !member.memberType || !member.memberType.name ||
    !member.subteams || member.subteams.length === 0 ||
    !member.name || !member.name.display
  )
}

// Create a profile from member data
const buildProfile = (member: QueryData, teamType: Map<string, string>) => {
  const links = member.links.length > 0 ? member.links : testData[0].contacts
  const teams = member.subteams.map((team: string) => teamType.get(team))

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
const insertProfileToMap = (teams: Map<string, Array<ProfileType>>, teamName: string, member: ProfileType) => {
  let memberList = [] as Array<ProfileType>

  // Add member to array
  if (teams.has(teamName)) {
    memberList = teams.get(teamName) as Array<ProfileType>

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
const sortProfiles = (members: Array<QueryData>, teamType: Map<string, string>) => {
  let teams = new Map() as Map<string, Array<ProfileType>>
  teams.set("Team Leads", [])

  // Insert profile into correct teams
  members.forEach((member: QueryData) => {
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
const applyTeamFilters = (teams: Map<string, Array<ProfileType>>, teamFilters: Array<boolean>) => {
  let filteredTeams = new Map() as Map<string, Array<ProfileType>>

  teams.forEach((team: Array<ProfileType>, teamName: string) => {
    if (teamName === "Team Leads") {
      team.forEach((member: ProfileType) => {
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

export {
  sortProfiles,
  applyTeamFilters
}
