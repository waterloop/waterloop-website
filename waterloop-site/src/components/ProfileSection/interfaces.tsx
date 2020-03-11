export type Profile = {
  name: string,
  position: string,
  portrait: string,
  contacts: Array<{icon: string, url: string}>
}

export interface PSectionProps {
  profiles: Array<Profile>
  profileType: string
}

export interface PSectionStates {
  expanded: Profile,
  minified: Array<Profile>
}
