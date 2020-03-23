import React from 'react';
import styled from 'styled-components'

const FitlerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 80px;

  @media (max-width: 975px){
    justify-content: center;
  }

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
  font-size: 14pt;
  font-weight: 600;

  &:hover {
    color: white;
    background-color: #222535;
  }

  @media (max-width: 975px){
    display: none;
  }

  &.mobile {
    text-align: left;
    padding-left: 15px;

    @media (max-width: 975px){
      display: unset;
    }
  }

  &.selectTeams {
    width: 200px;
    color: white;
    background-color: #222535;
    text-align: left;
    padding-left: 15px;

    @media (max-width: 975px){
      display: unset;
    }

    @media (min-width: 975px){
      display: none;
    }
  }
`

const SelectedFilter = styled(StyledFilter)`
  color: white;
  background-color: #222535;
`

const SlideDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  margin-right: 50px;
`
const StyledToggle = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40px;
  height: 30px;
  margin-top: 2.5px;
  margin-bottom: 2.5px;
  margin-left: 5px;
  background: transparent;
  border: none;
  outline: none;

  @media (min-width: 975px){
    display: none;
  }
`
const ToggleLine = styled.div`
  width: 35px;
  height: 5px;
  background-color: #F9D55B;
  border-radius: 10px;

  &.open{
    background-color: #808080;
  }
`

const TeamFilter = (props: any) => {
  let slideDownContainer;
  let toggleLine;
  let filterButtons = props.filters.teamFilters.map((filter: any, i: number) => {
    const Button = filter ? SelectedFilter : StyledFilter;
    return <Button key={i} onClick={() => props.updateFilters(i)}>Some Filter</Button>
    })

  if (props.filters.toggleOpen) {
    slideDownContainer = <SlideDownContainer >{filterButtons}</SlideDownContainer>
    toggleLine = <ToggleLine className="open"/>
  }
  else {
    slideDownContainer = <StyledFilter className="selectTeams">Select Team</StyledFilter>
    toggleLine = <ToggleLine/>
  }

  return (
    <FitlerContainer>
      {filterButtons}
      {slideDownContainer}
      <StyledToggle onClick={() => props.updateToggle()}>
        {toggleLine}
        {toggleLine}
        {toggleLine}
      </StyledToggle>
    </FitlerContainer>
  )
}

export default TeamFilter
