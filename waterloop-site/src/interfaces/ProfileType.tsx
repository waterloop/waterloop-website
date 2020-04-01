type ProfileType = {
  name: string,
  position: string,
  programInfo: string,
  portrait: string,
  teams: Array<string>,
  bio: string,
  contacts: Array<{icon: string, url: string}>
}

export default ProfileType
