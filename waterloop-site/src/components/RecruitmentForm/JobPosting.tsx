import React from 'react';
import { Button } from 'components';
import styled from 'styled-components';
import "../../theme/styles.scss";

type JobPostingProps = {
    role: string;
    deadline: string;
    subteam: string;
    applicationForm: string;
    term: string;
    description: string;
    tasks: string[];
    requirements: string[];
    interest: string[];
    // termList: [string, string, string, string, string];

}

const LightHeader = styled.h6`
    text-transform: uppercase;
    font-weight:600;
    color: #C4C4C4;
    margin-top: 0;

`;

class JobPosting extends React.Component<JobPostingProps> {
    constructor(props: JobPostingProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <a href={`/recruitment`} style={{ textDecoration: "none", color: "#010101" }}>
                    <h6 style={{ margin: "0" }}><i className="arrow left"></i> Back</h6>
                </a>
                <br />
                <div className="HeaderButtonWrapper">
                    <h2>{this.props.role}</h2>
                    <div className="ButtonWrap">
                        <Button
                            backgroundColor="yellow"
                            textColor="black"
                            text="APPLY"
                            onClick={() => window.open(`${this.props.applicationForm}`)}
                            variant={null} />
                    </div>
                </div>
                <LightHeader>WATERLOO, ON/{this.props.subteam}/{this.props.term}</LightHeader>
                <h6 style={{ color: "#010101", fontWeight: "normal" }}>Deadline: {this.props.deadline}</h6>
                <p>{this.props.description}</p>
                <div className="break" />
                <h3>What you'll do:</h3>
                <ul>
                    {this.props.tasks.map((task: any) => {
                        return (
                            <li>{task}</li>
                        )
                    })}
                </ul>
                <div className="break" />
                <h3>What we're looking for:</h3>
                <ul>
                    {this.props.requirements.map((task: any) => {
                        return (
                            <li>{task}</li>
                        )
                    })}
                </ul>
                <div className="break" />
                <h3>Areas of Interest</h3>
                <ul>
                    {this.props.interest.map((task: any) => {
                        return (
                            <li>{task}</li>
                        )
                    })}
                </ul>
                <div className="break" />
                <div className="centerDiv">
                    <Button
                        backgroundColor="yellow"
                        textColor="black"
                        text="APPLY"
                        onClick={() => window.open(`${this.props.applicationForm}`)}
                        variant={null} />
                </div>

            </div>
        );
    }
}

export default JobPosting;