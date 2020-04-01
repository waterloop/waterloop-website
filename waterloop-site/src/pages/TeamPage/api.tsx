// Config for teamHub api requests
const teamHubApiEndpoint = `https://cors-anywhere.herokuapp.com/https://hub.waterloop.ca/api`
const teamHubHeader = {
  authorization:
    "Bearer 16be4713087d2dab1a481b4e76de87ad9945cd31c385036178dee49adbe244648ee715fb60cdf7fdd4789bd1182f0252884e4d4957adeaed0d02ea37a735a8f1"
}

// Generate query params for fetch requests
const generateFiltersQuery = () => {
  return [
    `${teamHubApiEndpoint}/filters`,
    {
      method: "GET",
      headers: teamHubHeader
    }
  ]
}
const generateMembersQuery = () => {return [
    `${teamHubApiEndpoint}/members`,
    {
      method: "POST",
      headers: teamHubHeader
    }
  ]
}

export {
  generateMembersQuery,
  generateFiltersQuery
}
