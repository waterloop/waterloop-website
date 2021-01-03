import React from 'react';
import { w21Postings } from '../../static/consts/postings';
import SubTeam from './SubTeam';

const TEAMS = [
  'Mechanical',
  'Electrical',
  'Software',
  'LIM',
  'Infrastructure',
  'Business',
  'Web'
];

const Postings: React.FC = () => (
  <div>
    {TEAMS.map((team: string, index: number) => {
      return <SubTeam postings={w21Postings.filter((posting) => team === posting.subteam)} team={team} key={index} />;
    })}
  </div>
);

export default Postings;
