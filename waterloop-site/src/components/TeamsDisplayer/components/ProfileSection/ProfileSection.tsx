import React from 'react';
import styled from 'styled-components';

// Types and interfaces
import { ProfileType } from '../../interfaces';
import { PSectionProps } from '../interfaces';
import SubProfile from '../Profiles';

// Copy for team descriptions
import Text from 'static/copy/Team/descriptions.json';

const ProfileSectionContainer = styled.div`
  margin-bottom: 75px;
  @media (max-width: 975px) {
    margin-bottom: 50px;
  }
`;

const MinifiedContainer = styled.div`
  display: grid;
  grid-row-gap: 30px;
  @media (max-width: 975px) {
    display: grid;
    grid-row-gap: 20px;
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

const getBodyFromTitle = (title: string): string => {
  switch (title) {
    case 'Web':
      return Text.Web;
    case 'Electrical':
      return Text.Electrical;
    case 'TeamLeads':
      return Text.TeamLeads;
    case 'Admin':
      return Text.Admin;
    case 'Software':
      return Text.Software;
    case 'Exec':
      return Text.Exec;
    case 'Mechanical':
      return Text.Mechanical;
    case 'Infrastructure':
      return Text.Infrastructure;
    default:
      return '';
  }
};

// Profile Subsection
const ProfileSection: React.FC<PSectionProps> = props => {
  const ProfileTypeTag = SubProfile;
  return (
    <ProfileSectionContainer>
       <h3>
        {props.title === "Admin" ? "Business" : props.title}
      </h3>
      <p>{getBodyFromTitle(props.title)}</p>
      <MinifiedSubContainer>
        {props.profiles.map((profile: ProfileType, i: number) => (
          <ProfileTypeTag
            key={i}
            name={profile.name}
            position={profile.position}
            portrait={profile.portrait}
          />
        ))}
      </MinifiedSubContainer>
    </ProfileSectionContainer>
  );
};

export default ProfileSection;
