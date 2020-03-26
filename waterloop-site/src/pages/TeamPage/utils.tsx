// Check if member has crucial missing fields
const isProfileComplete = (member: any) => {
  return !(!member.memberType || member.memberType.length === 0 || !member.subteams || member.subteams.length === 0)
}

// Format 1d array of members into 2d array: [[team leads], [subteam 1 members], ... ]
const sortProfiles = (members: any) => {
  let formatedArray = [[]] as Array<Array<any>>
  let newSubteamMap = new Map()

  members.forEach((member: any, key: number) => {
    // Ignore members with missing team and position fields
    if (!isProfileComplete (member)) return

    // Add all Team Lead members to first subarray
    if (member.memberType.name === "Technical Director") {
      formatedArray[0].push(member)
    } else {
      // Insert member into subarray for each subteam they belong to
      member.subteams.forEach((team: string) => {
        // Keep track of newly found teams
        // Set {key: team name, value: current array length} and push empty an subarray
        if (!newSubteamMap.has(team)) {
          newSubteamMap.set(team, formatedArray.length)
          formatedArray.push([])
        }

        // Insert Subteam Lead members to front of subarray
        if (member.memberType.name === "Subteam Lead") {
          formatedArray[newSubteamMap.get(team)].unshift(member)
        } else {
          formatedArray[newSubteamMap.get(team)].push(member)
        }
      })
    }
  })

  return [formatedArray, newSubteamMap]
}

// generate params for teamhub query
const generateQueryParams = (id: number) => {
  const url = `https://cors-anywhere.herokuapp.com/https://hub.waterloop.ca/api`
  let params = ``
  if (id === 0) params = `members`
  else if (id === 1) params = `subteams/Software`
  else if (id === 2) params = `subteams/Mechanical`
  else if (id === 3) params = `subteams/Electrical`
  else if (id === 4) params = `subteams/Business`
  else params = ``
  return [
    `${url}/${params}`,
    {
      method: "POST",
      headers: {
        authorization:
          "Bearer 16be4713087d2dab1a481b4e76de87ad9945cd31c385036178dee49adbe244648ee715fb60cdf7fdd4789bd1182f0252884e4d4957adeaed0d02ea37a735a8f1"
      }
    }
  ]
}



export {
  sortProfiles,
  generateQueryParams
}
