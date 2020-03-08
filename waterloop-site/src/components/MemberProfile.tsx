import React from 'react';

const MemberProfile = (props: any) => (
  <span style={{backgroundColor: "gray"}} onClick={props.onClick}>{props.name}</span>
)

export default MemberProfile
