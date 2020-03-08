import React from 'react';
import styled from 'styled-components'

const StyledMemberProfile = styled.span`
  background-color: gray;
`

const MemberProfile = (props: any) => (
  <StyledMemberProfile onClick={props.onClick}>{props.name}</StyledMemberProfile>
)

export default MemberProfile
