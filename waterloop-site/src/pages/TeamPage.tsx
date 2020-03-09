import React from 'react'
import ProfileSection from '../components/ProfileSection'

import testData from '../testProfileData'

export default class TeamPage extends React.Component {
  render () {
    console.log(testData)
    return (
      <div>
        <h1>Leads 1</h1>
        <ProfileSection profiles={testData.slice(0,3)} />

        <h1>Leads 2</h1>
        <ProfileSection profiles={testData.slice(3,9)} />
      </div>
    )
  }
}
