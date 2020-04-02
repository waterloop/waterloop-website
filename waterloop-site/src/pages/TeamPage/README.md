# TeamPage Component Summary
TeamPage component which manages a TeamFilter component and mutliple rows of ProfileSection components. Used to display the members of the Waterloop team.

## Files and Components
### ```TeamPage.tsx```
This is a manager component for a displaying the members of the Waterloop team

#### Initialization
There are five state variables:
1. ```teamFilters: array<boolean>```
2. ```teamFilterLabels: array<string>```
3. ```memberData: map<string, array>```
4. ```subteamIdMap: map<string, string>```

The team filters will be run with the value of ```this.props.initFilterSetting```

#### Fetching Data
From the lifecylce function ```componentDidMount```: a ```GET``` request for subteam names and ids will be made and the data will be given to the ```subteamIdMap``` state variable.

Next a ```POST``` request is made for a complete list of members in the teamHub database. The members will be sorted by subteams (Team Leads is considered a subteam in this algorithm) and will be inserted into the ```memberData``` state variable with the key being the team name and the value being an array of all the members in the subteam.

#### Filtering data
Upon rendering, the ```memberData``` state variable will be filtered for the subteams according to the ```teamFilters``` state array. This creates an array of ```{title: string, members: array}``` which are dynamically rendered as subteams.

### ```api.tsx```
This file returns parameters for the queries needed by the teamHub API.

### ```utils.tsx```
This file exports various util functions that help with sorting, filtering and inserting members into data structures.

### ```interfaces.tsx```
This is where the local typescript interfaces and types are declared.

### ```index.tsx```
This is where the components of this folder are exported and made available to the rest of the app.

# Bugs/Existing Issues
1. Not using ```http://beta.hub.waterloop.ca/api``` as endpoint

# Next Steps
The following are functionality that should exist or be discussed.

### Querying for subteams
Right now a query is made for all the members. In the future when more members are added to the teamHub database, this becomes impractical and should be adjusted.

**Note** This will essentially replace some of functions from ```utils.tsx```.

### No usage of cashe
Reloading the page causes the requests to be made all over again. Conisder storing some of the member data in the cashe to prevent this.
