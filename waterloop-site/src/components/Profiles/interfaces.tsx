export type ContactsType = {
 contacts: Array<{icon: string, url: string}>
}

export type ProfileType = {
  name: string,
  position: string,
  programInfo: string,
  portrait: string,
  teams: Array<string>,
  bio: string,
  contacts: Array<{icon: string, url: string}>
}

export interface PSectionProps {
  title: string,
  profiles: Array<ProfileType>,
  profileType: string
}

export interface PSectionStates {
  expanded: ProfileType,
  minified: Array<ProfileType>
}
