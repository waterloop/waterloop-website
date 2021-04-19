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
  // termList: [string, string, string, string, string];
};

const LightHeader = styled.h6`
  text-transform: uppercase;
  font-weight: 600;
  color: #c4c4c4;
  margin-top: 0;
`;
const applicationForm = process.env.REACT_APP_APPLICATION_FORM_URL;

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
    <p>{props.description}</p>
    <div className="break" />
    <h3>What you'll do:</h3>
    <ul>
      {props.tasks.map((task: string) => (
        <li>{task}</li>
      ))}
    </ul>
    <div className="break" />
    <h3>Requirements:</h3>
    <ul>
      {props.requirements.map((task: string) => (
        <li>{task}</li>
      ))}
    </ul>
    <div className="break" />
    {props.additional.length > 0 && (
      <>
        <h3>Additional info:</h3>
        <ul>
          {props.additional.map((task: string) => (
            <li>{task}</li>
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
