import React from "react";
import styled from "styled-components";

// Types and interfaces
import { ProfileType } from "../../interfaces";
import { PSectionProps, PSectionState, Descriptions } from "../interfaces";
import { SubProfile } from "../Profiles";

// Copy for team descriptions
import Text from "static/copy/Team/descriptions.json";

const ProfileSectionContainer = styled.div`
  margin-bottom: 100px;

  @media (max-width: 975px) {
    margin-bottom: 50px;
  }
`;

const MinifiedContainer = styled.div`
  display: grid;
  grid-row-gap: 100px;

  @media (max-width: 975px) {
    display: grid;
    grid-row-gap: 50px;
  }
`;

const MinifiedSubContainer = styled(MinifiedContainer)`
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 975px) {
    grid-template-columns: repeat(2, 1fr);
  }

  & > div:nth-child(4n-1) {
    margin-left: 0 auto 0 auto;
  }
`;

// Profile Subsection
export default class ProfileSection extends React.Component<
  PSectionProps,
  PSectionState
> {
  constructor(props: PSectionProps) {
    super(props);
    this.state = {
      minified: this.props.profiles,
    };
  }

  // Update states upon recieving new props
  UNSAFE_componentWillReceiveProps(nextProps: PSectionProps) {
    this.setState({
      minified: nextProps.profiles,
    });
  }

  render() {
    const minified = this.state.minified;
    var team = this.props.title;

    let ProfileTypeTag = SubProfile;

    return (
      <ProfileSectionContainer>
        {this.props.title && <h3>{this.props.title}</h3>}

        <p>
          {/* TODO: Clean this up :) */}
          {this.props.title === "Web" ? Text.Web : ""}
          {this.props.title === "Electrical" ? Text.Electrical : ""}
          {this.props.title === "TeamLeads" ? Text.TeamLeads : ""}
          {this.props.title === "Admin" ? Text.Admin : ""}
          {this.props.title === "Software" ? Text.Software : ""}
          {this.props.title === "Exec" ? Text.Exec : ""}
          {this.props.title === "Mechanical" ? Text.Mechanical : ""}
          {this.props.title === "Infrastructure" ? Text.Infrastructure : ""}
        </p>

        {
          <MinifiedSubContainer>
            {minified.map((profile: ProfileType, i: number) => {
              return (
                <ProfileTypeTag
                  key={i}
                  name={profile.name}
                  position={profile.position}
                  portrait={profile.portrait}
                  contacts={profile.contacts}
                />
              );
            })}
          </MinifiedSubContainer>
        }
      </ProfileSectionContainer>
    );
  }
}
