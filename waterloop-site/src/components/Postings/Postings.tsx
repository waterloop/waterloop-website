import React from 'react';
import { samplePostingsData } from '../../static/consts/postings';
import SubTeam from './SubTeam';

const TEAMS = [
  'Mechanical',
  'Electrical',
  'Software',
  'LIM',
  'Infrastructure',
];

const Postings: React.FC = () => (
  <div>
    {TEAMS.map((team: string, index: number) => {
      return <SubTeam postings={samplePostingsData} team={team} key={index} />;
    })}
  </div>
);

export default Postings;
