import ProfileType from '../../interfaces'

export type QueryData = any

export interface SubteamProps {
  title: string,
  members: Array<ProfileType>
}

export interface TeamPageProps {
  initFilterSetting: number
}

export interface TeamPageState {
  teamFilters: Array<boolean>,
  teamFilterLabels: Array<string>,
  toggleOpen: boolean,
  memberData: Map<string, Array<ProfileType>>,
  subteamIdMap: Map<string, string>
}
