import ProfileType from '../../interfaces'

export type QueryData = any

export interface SubteamProps {
  title: string,
  members: Array<ProfileType>
}

export interface TeamsDisplayerProps {
  initFilterSetting: number
}

export interface TeamsDisplayerState {
  teamFilters: Array<boolean>,
  teamFilterLabels: Array<string>,
  memberData: Map<string, Array<ProfileType>>,
  subteamIdMap: Map<string, string>
}
