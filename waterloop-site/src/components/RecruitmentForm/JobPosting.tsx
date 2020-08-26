import React, { Component } from 'react';



type JobPostingProps = {
    role: string;
    deadline: string;
    description: string;
    tasks: string[];
    requirements: string[];
    interest: string[];
    // termList: [string, string, string, string, string];

}
class JobPosting extends React.Component<JobPostingProps> {
    constructor(props: JobPostingProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>{this.props.role}</h2>
                <h2>{this.props.deadline}</h2>
                <p>{this.props.description}</p>
                <p>What you'll do:</p>
                <ul>
                    {this.props.tasks.map((task:any)=>{
                        return (
                        <li>{task}</li>
                        )
                    })}
                </ul>
                <p>What we're looking for:</p>
                <ul>
                    {this.props.requirements.map((task:any)=>{
                        return (
                        <li>{task}</li>
                        )
                    })}
                </ul>
                <p>Areas of Interest</p>
                <ul>
                    {this.props.interest.map((task:any)=>{
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