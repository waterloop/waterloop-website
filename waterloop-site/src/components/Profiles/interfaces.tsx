import ProfileType from '../../interfaces'

export type ContactsType = {
 contacts: Array<{icon: string, url: string}>
}

export interface PSectionProps {
  title: string,
  profiles: Array<ProfileType>,
  profileType: string
}

export interface PSectionState {
  expanded: ProfileType,
  minified: Array<ProfileType>
}
