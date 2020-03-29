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

// URL endpoint for teamHubApi
const teamHubApiEndpoint = `https://cors-anywhere.herokuapp.com/https://hub.waterloop.ca/api`

// Header for teamHub api request s
const teamHubHeader = {
  authorization:
    "Bearer 16be4713087d2dab1a481b4e76de87ad9945cd31c385036178dee49adbe244648ee715fb60cdf7fdd4789bd1182f0252884e4d4957adeaed0d02ea37a735a8f1"
}

// Generate query params for filters data
const generateFiltersQuery = () => {
  return [
    `${teamHubApiEndpoint}/filters`,
    {
      method: "GET",
      headers: teamHubHeader
    }
  ]
}

// generate query params for members data
const generateMembersQuery = () => {return [
    `${teamHubApiEndpoint}/members`,
    {
      method: "POST",
      headers: teamHubHeader
    }
  ]
}

export {
  sortProfiles,
  generateMembersQuery,
  generateFiltersQuery
}
