import React from 'react';
import { Button } from 'components';
import styled from 'styled-components';
import '../../theme/styles.scss';

type JobPostingProps = {
  role: string;
  deadline: string;
  subteam: string;
  term: string;
  description: string;
  tasks: string[];
  requirements: string[];
  additional: string[];
  recommendedSkills: string[];
  skillsToBeLearned: string[];
  timeCommitment: string;
  // termList: [string, string, string, string, string];
};

const LightHeader = styled.h6`
  text-transform: uppercase;
  font-weight: 600;
  color: #c4c4c4;
  margin-top: 0;
`;
const applicationForm = process.env.REACT_APP_APPLICATION_FORM_URL;

const FormattedP = styled.p`
  white-space: pre-line; // ensures spaces and line breaks get displayed
`;

const JobPosting: React.FC<JobPostingProps> = (props) => (
  <div>
    <a
      href={`/recruitment`}
      style={{ textDecoration: 'none', color: '#010101' }}
    >
      <h6 style={{ margin: '0' }}>
        <i className="arrow left"></i> Back
      </h6>
    </a>
    <br />
    <div className="HeaderButtonWrapper">
      <h2>{props.role}</h2>
      <div className="ButtonWrap">
        <Button
          backgroundColor="yellow"
          textColor="black"
          text="APPLY"
          onClick={(): Window | null => window.open(`${applicationForm}`)}
        />
      </div>
    </div>
    <LightHeader>
      WATERLOO, ON/ {props.subteam}/ {props.term}
    </LightHeader>
    <h6 style={{ color: '#010101', fontWeight: 'normal' }}>
      Deadline: {props.deadline}
    </h6>
    <FormattedP>{props.description}</FormattedP>
    {props.tasks.length > 0 && (
      <>
        <div className="break" />
        <h3>What you'll do:</h3>
        <ul>
          {props.tasks.map((task: string, idx: number) => (
            <li key={idx}>{task}</li>
          ))}
        </ul>
      </>
    )}
    {props.requirements.length > 0 && (
      <>
        <div className="break" />
        <h3>Requirements:</h3>
        <ul>
          {props.requirements.map((task: string, idx: number) => (
            <li key={idx}>{task}</li>
          ))}
          <li>Time commitment of {props.timeCommitment}</li>
        </ul>
      </>
    )}
    {props.skillsToBeLearned.length > 0 && (
      <>
        <h3>Skills to be Learned:</h3>
        <ul>
          {props.skillsToBeLearned.map((skillToBeLearned: string, idx: number) => (
            <li key={idx}>{skillToBeLearned}</li>
          ))}
        </ul>
      </>
    )}
    {props.recommendedSkills.length > 0 && (
      <>
        <h3>Recommended Skills:</h3>
        <ul>
          {props.recommendedSkills.map((recommendedSkill: string, idx: number) => (
            <li key={idx}>{recommendedSkill}</li>
          ))}
        </ul>
      </>
    )}
    {props.additional.length > 0 && (
      <>
        <h3>Additional info:</h3>
        <ul>
          {props.additional.map((info: string, idx: number) => (
            <li key={idx}>{info}</li>
          ))}
        </ul>
      </>
    )}
    <div className="break" />
    <div className="centerDiv">
      <Button
        backgroundColor="yellow"
        textColor="black"
        text="APPLY"
        onClick={(): Window | null => window.open(`${applicationForm}`)}
      />
    </div>
  </div>
);

export default JobPosting;
