import React from 'react';
import styled from 'styled-components'

const FitlerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 80px;
`
const StyledFilter = styled.button`
  width: 150px;
  height: 35px;
  background-color: #F9D55B;
  border-radius: 25px;
  border: none;
  outline: none;

  text-align: center;
  font-family: IBM Plex Sans;
  font-style: bold;

  &:hover {
    color: white;
    background-color: #222535;
  }
`

const Filter = (props: any) => {
  const HandleClick = () => {
    alert("applying new filters")
  }

  return <StyledFilter onClick={() => HandleClick()}>Some Filter</StyledFilter>
}

export default class TeamFitler extends React.Component <any, any> {
  render () {
    return <FitlerContainer>
      <Filter/>
      <Filter/>
      <Filter/>
      <Filter/>
      <Filter/>
    </FitlerContainer>
  }
}
