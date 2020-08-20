import React from "react";
import styled from "styled-components";
import Preloader from "components/Preloader/Preloader";
// Types and interfaces
import {
  ProfileType,
  QueryData,
  SubteamProps,
  TeamsDisplayerProps,
  TeamsDisplayerState,
} from "./interfaces";

// Components
import { ProfileSection, TeamFilter } from "./components";

// Utility
import { sortProfiles, applyTeamFilters } from "./utils";
import { generateMembersQuery, generateFiltersQuery } from "./api";

// Styled components for ProfileSection
const Page = styled.div`
  @media (max-width: 975px) {
    display: flex;
    flex-direction: column;
    width: 475px;
    margin: 0 auto;
  }
`;

export default class TeamsDisplayer extends React.Component<
  TeamsDisplayerProps,
  TeamsDisplayerState
> {
  constructor(props: TeamsDisplayerProps) {
    super(props);
    this.state = {
      loading: true,
      teamFilters: Array(5).fill(false),
      teamFilterLabels: [
        "ALL TEAMS",
        "SOFTWARE",
        "HARDWARE",
        "ELECTRICAL",
        "BUSINESS",
      ],
      memberData: new Map(),
      subteamIdMap: new Map(),
    };
  }

  // Initialization
  componentDidMount() {
    this.fetchSubteams();
    this.updateFilters(this.props.initFilterSetting);
  }

  // fetch subteams
  fetchSubteams() {
    const [query, options] = generateFiltersQuery();
    fetch(query as string, options as object)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        console.log("finished fetching subteam data");
        let newMap = this.state.subteamIdMap;
        res.body.subteams.forEach((team: QueryData) =>
          newMap.set(team._id, team.name)
        );

        this.setState({ subteamIdMap: newMap });
        this.fetchProfiles();
      })
      .catch((err) => {
        alert(`Error in fetching filters`);
        console.log(err);
      });
  }

  // fetch data from teamhub
  fetchProfiles() {
    const [query, options] = generateMembersQuery();
    fetch(query as string, options as object)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        console.log("finished fetching member data");
        const groupedProfiles = sortProfiles(
          res.body,
          this.state.subteamIdMap
        ) as Map<string, Array<ProfileType>>;
        this.setState({ memberData: groupedProfiles });
        this.setState({ loading: false });
      })
      .catch((err) => {
        alert(`Error in fetching members`);
        console.log(err);
      });
  }

  // Update filter states to refine members show on page
  updateFilters(id: number) {
    let newFilterStates = this.state.teamFilters;
    newFilterStates[id] = !newFilterStates[id];

    // Activating all teams removes all filters
    if (id === 0) {
      if (newFilterStates[id]) {
        newFilterStates = newFilterStates.map(
          (value: Boolean, i: number) => i === 0
        );
      }
      // All Teams can only be deactivated by activating another filter
      else {
        newFilterStates[0] = true;
      }
    }
    // Automatically clear All Teams filter if another filter is activated
    else if (id !== 0 && newFilterStates[id]) {
      newFilterStates[0] = false;
    } else {
      let sum = 0;
      newFilterStates.forEach((res: boolean) => {
        const num = res ? 1 : 0;
        sum = sum + num;
      });
      if (sum === 0) {
        newFilterStates[0] = true;
      }
    }

    this.setState({ teamFilters: newFilterStates });
  }

  render() {
    let teams = this.state.memberData;
    let leads = [] as Array<ProfileType>;
    let subteams = [] as Array<SubteamProps>;

    // Populate teams with profiles after request finishes
    if (teams.size > 0) {
      // Apply filters
      const filteredTeams = applyTeamFilters(teams, this.state.teamFilters);
      if (filteredTeams.has("Team Leads")) {
        leads = filteredTeams.get("Team Leads") as Array<ProfileType>;
      }
      filteredTeams.forEach((team: Array<ProfileType>, name: string) => {
        if (name !== "Team Leads") {
          subteams.push({ title: name, members: team });
        }
      });
    }

    return (
      <Page>
        {this.state.loading ? <Preloader /> : <></>}
        {leads.length > 0 && (
          <ProfileSection
            title={"Team Leads"}
            profiles={leads}
            profileType={"lead"}
          />
        )}

        {subteams.length > 0 &&
          subteams.map(
            (
              team: { title: string; members: Array<ProfileType> },
              i: number
            ) => {
              return (
                <ProfileSection
                  key={i}
                  title={team.title}
                  profiles={team.members}
                  profileType={"subteam"}
                />
              );
            }
          )}
      </Page>
    );
  }
}
