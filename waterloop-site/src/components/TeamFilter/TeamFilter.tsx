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

const TeamFilter = (props: any) => {
  return (
    <FitlerContainer>
      {props.filters.map((filter: any, i: number) => {
        return <StyledFilter key={i} onClick={() => props.SetFilters(i)}>Some Filter</StyledFilter>
      })}
    </FitlerContainer>
  )
}
export default TeamFilter
