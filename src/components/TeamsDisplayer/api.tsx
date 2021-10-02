// Config for teamHub api requests
const teamHubApiEndpoint = `https://cors-anywhere.herokuapp.com/https://hub.waterloop.ca/api`;
const teamHubHeader = {
  authorization:
    'Bearer d9c6bf2221a7c4475bab79e058701ae18bfecd4b33f1af75c42bc47dade26f580fde63bbea07b774a176d4252872dc32959b45ddf84fa2e7625acb0d1608c12e',
};

const generateMembersQuery = (): [string, object] => [
  `${teamHubApiEndpoint}/members`,
  {
    method: 'POST',
    headers: teamHubHeader,
  },
];

export { generateMembersQuery };
