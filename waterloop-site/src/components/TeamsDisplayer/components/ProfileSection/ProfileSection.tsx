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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit.
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
