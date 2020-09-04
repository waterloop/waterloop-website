// Interfaces
import { ProfileType, QueryData } from "./interfaces";

// Test data
import testData from "./testProfileData";

// Check if member has crucial missing fields
const isProfileComplete = (member: QueryData): boolean => {
  return !(
    !member.memberType ||
    !member.memberType.name ||
    !member.subteams ||
    member.subteams.length === 0 ||
    !member.name ||
    !member.name.display
  );
};

// Create a profile from member data
const buildProfile = (member: QueryData, teamType: Map<string, string>): ProfileType => {
  const links = member.links.length > 0 ? member.links : testData[0].contacts;
  const teams = member.subteams.map((team: string) => teamType.get(team));

  // Generate program description with missing fields in mind
  let program = member.program || "Student";
  if (member.stream && member.stream.currentSchoolTerm) {
    program = `${member.stream.currentSchoolTerm} ${program}`;
  }

  return {
    name: member.name.display,
    position: member.memberType.name,
    programInfo: program,
    portrait: member.imageUrl,
    teams,
    bio: member.bio,
    contacts: links,
  };
};

// Insert a profile into correct array position as a map value
const insertProfileToMap = (
  teams: Map<string, Array<ProfileType>>,
  teamName: string,
  member: ProfileType
): void => {
  let memberList = [] as Array<ProfileType>;

  // Add member to array
  if (teams.has(teamName)) {
    memberList = teams.get(teamName) as Array<ProfileType>;

    // Insert Subteam leads to front of array
    if (member.position === "Subteam Lead") {
      memberList.unshift(member);
    } else {
      memberList.push(member);
    }
  } else {
    memberList = [member];
  }

  // Update map value with new member
  teams.set(teamName, memberList);
};

// Group an array of profiles into their respective categories
const sortProfiles = (
  members: QueryData[],
  teamType: Map<string, string>
): Map<string, ProfileType[]> => {
  const teams = new Map() as Map<string, ProfileType[]>;
  teams.set("Team Leads", []);

  // Insert profile into correct teams
  members.forEach((member: QueryData) => {
    // Ignore incomplete profiles
    if (isProfileComplete(member)) {
      // create a profile
      const profile = buildProfile(member, teamType);

      // Group Members by their subteams
      member.subteams.forEach((team: string) => {
        const teamName = teamType.get(team) as string;
        insertProfileToMap(teams, teamName, profile);
      });
    }
  });

  return teams;
};

// check if filter applies or not
// ?TODO: Should this be hardcoded?
const checkWithinTeamFilters = (name: string, teamFilters: boolean[]): boolean => {
  if (!teamFilters[0]) {
    if (!teamFilters[1] && name === "Exec") {
      return false;
    }
    if (!teamFilters[2] && name === "Software") {
      return false;
    }
    if (!teamFilters[3] && name === "Mechanical") {
      return false;
    }
    if (!teamFilters[4] && name === "Electrical") {
      return false;
    }
    if (!teamFilters[5] && name === "Web") {
      return false;
    }
    if (!teamFilters[6] && (name === "Infrastructure" || name === "Admin")) {
      return false;
    }
  }
  return true;
};

// Apply team filters to data set
const applyTeamFilters = (
  teams: Map<string, Array<ProfileType>>,
  teamFilters: Array<boolean>
): Map<string, ProfileType[]> => {
  const filteredTeams = new Map() as Map<string, ProfileType[]>;

  teams.forEach((team: Array<ProfileType>, teamName: string) => {
    if (teamName === "Team Leads") {
      team.forEach((member: ProfileType) => {
        for (let i = 0; i < member.teams.length; i += 1) {
          if (checkWithinTeamFilters(member.teams[i], teamFilters)) {
            insertProfileToMap(filteredTeams, teamName, member);
            break;
          }
        }
      });
    } else if (checkWithinTeamFilters(teamName, teamFilters)) {
      filteredTeams.set(teamName, team);
    }
  });

  return filteredTeams;
};

export { sortProfiles, applyTeamFilters };
