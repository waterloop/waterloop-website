import React from "react";
import styled from "styled-components";

// Types and interfaces
import { ProfileType } from "../../interfaces";
import { PSectionProps, PSectionState } from "../interfaces";
import { SubProfile } from "../Profiles";

// Styled components for ProfileSection
const ProfileSectionTitle = styled.h5`
  font-family: IBM Plex Sans;
  font-style: italic;
  font-weight: 600;
  font-size: 36px;
  color: #010101;
  margin-bottom: 50px;
`;
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
const TeamDescription = styled.h6`
  margin-bottom: 60px;
  font-family: IBM Plex Sans;
  font-style: normal;
  text-align: justify;
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

    let ProfileContainerTypeTag = MinifiedSubContainer;
    let ProfileTypeTag = SubProfile;

    return (
      <ProfileSectionContainer>
        {this.props.title && (
          <ProfileSectionTitle>{this.props.title}</ProfileSectionTitle>
        )}

        <TeamDescription>
          Leads are experienced members of the team responsible for mentoring younger members, reviewing designs, doing high-level planning and scoping tasks for each term, and ensuring work is completed in time to meet schedule milestones. This group consists of all the subteam leads as well as a few executive members who manage the overall team.
        </TeamDescription>

        {
          // Dynamically insert minified profiles
          <ProfileContainerTypeTag>
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
          </ProfileContainerTypeTag>
        }
      </ProfileSectionContainer>
    );
  }
}
