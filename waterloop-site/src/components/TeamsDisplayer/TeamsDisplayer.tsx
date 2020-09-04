import React from "react";
import styled from "styled-components";
import { Button } from "components";
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
import { Preloader } from "components/Preloader";

// Styled components for ProfileSection
const Page = styled.div`
  @media (max-width: 975px) {
    display: flex;
    flex-direction: column;
    width: 95%;
    padding: 2.5%;
    margin: 0 auto;
  }
`;

const sortSubteams = (subteams: SubteamProps[]): SubteamProps[] => {
  const newTeams = [] as SubteamProps[];
  subteams.forEach(
    (team: { title: string; members: Array<ProfileType> }, i: number) => {
      if (team.title === "Exec") {
        newTeams[0] = team;
      } else if (team.title === "Mechanical") {
        newTeams[1] = team;
      } else if (team.title === "Electrical") {
        newTeams[2] = team;
      } else if (team.title === "Software") {
        newTeams[3] = team;
      } else if (team.title === "Web") {
        newTeams[4] = team;
      } else if (team.title === "Infrastructure") {
        newTeams[5] = team;
      } else if (team.title === "Admin") {
        newTeams[6] = team;
      }
    }
  );
  return newTeams;
}

export default class TeamsDisplayer extends React.Component<
  TeamsDisplayerProps,
  TeamsDisplayerState
> {
  constructor(props: TeamsDisplayerProps) {
    super(props);
    this.state = {
      loading: true,
      teamFilters: Array(7).fill(false),
      teamFilterLabels: [
        "All Teams",
        "Exec",
        "Software",
        "Mechanical",
        "Electrical",
        "Web",
        "Business",
      ],
      memberData: new Map(),
      subteamIdMap: new Map(),
    };
  }

  // Initialization
  componentDidMount(): void {
    this.fetchSubteams();
    this.updateFilters(this.props.initFilterSetting);
  }

  // fetch subteams
  fetchSubteams(): void {
    const [query, options] = generateFiltersQuery();
    fetch(query as string, options as object)
      .then((res) => res.json())
      .then((res) => {
        const newMap = this.state.subteamIdMap;
        res.body.subteams.forEach((team: QueryData) =>
          // eslint-disable-next-line no-underscore-dangle
          newMap.set(team._id, team.name)
        );
        this.setState({ subteamIdMap: newMap });
        this.fetchProfiles();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // fetch data from teamhub
  fetchProfiles(): void {
    const [query, options] = generateMembersQuery();
    fetch(query, options)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);

        const groupedProfiles = sortProfiles(
          res.body,
          this.state.subteamIdMap
        ) as Map<string, ProfileType[]>;
        this.setState({ memberData: groupedProfiles });
        this.setState({ loading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Update filter states to refine members show on page
  updateFilters(id: number): void {
    let newFilterStates = this.state.teamFilters;
    newFilterStates[id] = !newFilterStates[id];

    // Activating all teams removes all filters
    if (id === 0) {
      if (newFilterStates[id]) {
        newFilterStates = newFilterStates.map(
          (value: boolean, i: number) => i === 0
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
        sum += num;
      });
      if (sum === 0) {
        newFilterStates[0] = true;
      }
    }
    this.setState({ teamFilters: newFilterStates });
  }

  render(): React.ReactElement {
    const teams = this.state.memberData;
    let subteams = [] as SubteamProps[];

    // Populate teams with profiles after request finishes
    if (teams.size > 0) {
      // Apply filters
      const filteredTeams = applyTeamFilters(teams, this.state.teamFilters);

      filteredTeams.forEach((team: Array<ProfileType>, name: string) => {
        subteams.push({ title: name, members: team });
        subteams = sortSubteams(subteams);
      });
    }

    return (
      <Page>
        <TeamFilter
          teamFilters={this.state.teamFilters}
          filterLabels={this.state.teamFilterLabels}
          updateFilters={(id: number): void => this.updateFilters(id)}
        />
        {this.state.loading ? <Preloader /> : <></>}

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
        <div className="justify-center">
          <Button
            backgroundColor="yellow"
            textColor="black"
            text={"JOIN THE TEAM"}
            onClick={(): Window | null => window.open("/recruitment", "_self")}
          />
        </div>
      </Page>
    );
  }
}
