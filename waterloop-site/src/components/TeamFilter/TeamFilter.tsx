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
    padding-left: 30px;
    font-size: 28pt;
    border-radius: 50px;

    width: 300px;
    height: 70px;

    @media (max-width: 975px){
      display: unset;
    }

    @media (min-width: 975px){
      display: none;
    }
  }

  &.selectTeams {
    width: 375px;
    height: 70px;
    font-size: 28pt;
    border-radius: 50px;
    color: white;
    background-color: #222535;
    text-align: left;
    padding-left: 30px;

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
  height: 400px;

  @media (min-width: 975px){
    display: none;
  }
`
const StyledToggle = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60px;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  background: transparent;
  border: none;
  outline: none;

  @media (min-width: 975px){
    display: none;
  }
`
const ToggleLine = styled.div`
  width: 55px;
  height: 8px;
  background-color: #F9D55B;
  border-radius: 10px;

  &.open{
    background-color: #808080;
  }
`

const TeamFilter = (props: any) => {
  let slideDownContainer;
  let toggleLine;

  if (props.filters.toggleOpen) {
    slideDownContainer = <SlideDownContainer >{props.filters.teamFilters.map((filter: any, i: number) => {
      const Button = filter ? SelectedFilter : StyledFilter;
      return <Button className="mobile" key={i} onClick={() => props.updateFilters(i)}>{props.filterLabels[i]}</Button>
      })}</SlideDownContainer>
    toggleLine = <ToggleLine className="open"/>
  }
  else {
    slideDownContainer = <StyledFilter className="selectTeams" onClick={() => props.updateToggle()}>Select Team</StyledFilter>
    toggleLine = <ToggleLine/>
  }

  return (
    <FitlerContainer>
      {props.filters.teamFilters.map((filter: any, i: number) => {
        const Button = filter ? SelectedFilter : StyledFilter;
        return <Button key={i} onClick={() => props.updateFilters(i)}>{props.filterLabels[i]}</Button>
      })}
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
