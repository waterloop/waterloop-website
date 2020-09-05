export interface Contact {
  icon: string;
  url: string;
}

export type ProfileType = {
  name: string;
  position: string;
  programInfo: string;
  portrait: string;
  teams: string[];
  bio: string;
  contacts: Contact[];
};

export type QueryData = any;

export interface SubteamProps {
  title: string;
  members: ProfileType[];
}

export interface TeamsDisplayerProps {
  initFilterSetting: number;
}

export interface TeamsDisplayerState {
  teamFilters: boolean[];
  teamFilterLabels: string[];
  memberData: Map<string, ProfileType[]>;
  subteamIdMap: Map<string, string>;
  loading: boolean;
}
