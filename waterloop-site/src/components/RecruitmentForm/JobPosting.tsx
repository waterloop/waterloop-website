import React, { Component } from 'react';
import { Button } from 'components';
import styled from 'styled-components';
import { BrowserRouter, Link } from 'react-router-dom';



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

const TemporaryHeader = styled.h2`
font-weight:normal;
color: #C4C4C4;
`;
const HeaderButtonWrapper = styled.div`
display:flex;
justify-content:space-between

`;
class JobPosting extends React.Component<JobPostingProps> {
    constructor(props: JobPostingProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <a href={`/recruitment`} style={{textDecoration:"none", color:"black"}}>
                <p><i className="arrow left"></i> Back</p>
                </a>
                <br />
                <HeaderButtonWrapper>
                    <h3 style={{ color: "black" }}>{this.props.role}</h3>
                    <div>
                        <Button
                            backgroundColor="yellow"
                            textColor="black"
                            text="APPLY"
                            onClick={() => window.open(`${this.props.applicationForm}`)}
                            variant={null} />
                    </div>
                </HeaderButtonWrapper>
                <TemporaryHeader>WATERLOO, ON/{this.props.subteam}/{this.props.term}</TemporaryHeader>
                <h4 style={{ color: "black" }}>{this.props.deadline}</h4>
                <p>{this.props.description}</p>
                <h2>What you'll do:</h2>
                <ul>
                    {this.props.tasks.map((task: any) => {
                        return (
                            <li>{task}</li>
                        )
                    })}
                </ul>
                <h2>What we're looking for:</h2>
                <ul>
                    {this.props.requirements.map((task: any) => {
                        return (
                            <li>{task}</li>
                        )
                    })}
                </ul>
                <h2>Areas of Interest</h2>
                <ul>
                    {this.props.interest.map((task: any) => {
                        return (
                            <li>{task}</li>
                        )
                    })}
                </ul>

            </div>
        );
    }
}

export default JobPosting;