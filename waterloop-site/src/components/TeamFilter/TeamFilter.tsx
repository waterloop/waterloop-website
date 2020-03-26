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

  //web buttons disappear when the width is less than 975px
  @media (max-width: 975px){
    display: none;
  }

  // mobile buttons
  &.mobile {
    text-align: left;
    padding-left: 30px;
    font-size: 28pt;
    border-radius: 50px;

    width: 300px;
    height: 70px;

    //displays when width is less than 975px
    @media (max-width: 975px){
      display: unset;
    }

    //diasppears when width is more than 975px
    @media (min-width: 975px){
      display: none;
    }
  }

  //select team button when mobile toggle is closed
  &.selectTeams {
    width: 375px;
    height: 70px;
    font-size: 28pt;
    border-radius: 50px;
    color: white;
    background-color: #222535;
    text-align: left;
    padding-left: 30px;

    //displays when width is less than 975px
    @media (max-width: 975px){
      display: unset;
    }

    //diasppears when width is more than 975px
    @media (min-width: 975px){
      display: none;
    }
  }
`

//button colours when selected
const SelectedFilter = styled(StyledFilter)`
  color: white;
  background-color: #222535;
`

//container for buttons in mobile
const SlideDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;

  @media (min-width: 975px){
    display: none;
  }
`

//mobile toggle button 
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
//lines of the mobile toggle button
const ToggleLine = styled.div`
  width: 55px;
  height: 8px;
  background-color: #F9D55B;
  border-radius: 10px;

  //toggle line color when toggle button is selected
  &.open{
    background-color: #808080;
  }
`

const TeamFilter = (props: any) => {
  let slideDownContainer;
  let toggleLine;

  //toggle is open: slide down container contains the team filter buttons in mobile format and toggle lines become grey
  //toggle is closed: slide down container contains the select team button and toggle lines are yellow
  if (props.filters.toggleOpen) {
    slideDownContainer = <SlideDownContainer >{props.filters.teamFilters.map((filter: any, i: number) => {
       //checks if filter has been applied and changes style accordingly
      const Button = filter ? SelectedFilter : StyledFilter;
      return <Button className="mobile" key={i} onClick={() => props.updateFilters(i)}>Some Filter</Button>
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
       //checks if filter has been applied and changes style accordingly
      const Button = filter ? SelectedFilter : StyledFilter;
      return <Button key={i} onClick={() => props.updateFilters(i)}>Some Filter</Button>
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
