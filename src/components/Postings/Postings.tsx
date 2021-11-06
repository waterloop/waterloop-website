import { Team } from 'api/teams';
import usePostings from 'hooks/postings';
import useTeams from 'hooks/teams';
import React from 'react';
// import { w21Postings } from '../../static/consts/postings';
import SubTeam from './SubTeam';

const Postings: React.FC = () => {
  const { postings } = usePostings();
  const { teams } = useTeams();
  // Move the "Executive" subteam to the front of the array
  const executiveIdx = teams.findIndex(
    (teams) => teams.teamName === 'Executive',
  );
  teams.push(...teams.splice(0, executiveIdx));

  return (
    <div>
      {teams.map((team: Team, index: number) => {
        return (
          <SubTeam
            postings={postings.filter(
              (posting) => team.teamName === posting.team,
            )}
            team={team.teamName}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Postings;
