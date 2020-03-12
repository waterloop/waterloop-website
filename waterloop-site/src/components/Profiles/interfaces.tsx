export type ContactsType = {
 contacts: Array<{icon: string, url: string}>
}

export type ProfileType = {
  name: string,
  position: string,
  portrait: string,
  contacts: Array<{icon: string, url: string}>
}

export interface PSectionProps {
  profiles: Array<ProfileType>
  profileType: string
}

export interface PSectionStates {
  expanded: ProfileType,
  minified: Array<ProfileType>
}
