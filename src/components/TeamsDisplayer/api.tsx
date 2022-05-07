// Config for teamHub api requests
const teamHubApiEndpoint = `https://hub.waterloop.ca/api`;

const generateMembersQuery = (): [string, object] => [
  `${teamHubApiEndpoint}/members`,
  {
    method: 'POST',
  },
];

export { generateMembersQuery };
