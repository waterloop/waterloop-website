import React from 'react'
import JobPosting from './JobPosting'
import { samplePostingsData } from '../../static/consts/postings';
import { useParams } from 'react-router';
import styled from 'styled-components';


interface RouteParams {
    id: number;
}
export default function JobPostingPage() {


    let stringid: any = useParams();
    let id: number = parseInt(stringid.id) - 1;

    return (
        <div className="pageContainer">
            <JobPosting
                role={samplePostingsData[id].role}
                subteam={samplePostingsData[id].subteam}
                term={samplePostingsData[id].term}
                applicationForm={samplePostingsData[id].applicationForm}
                deadline={samplePostingsData[id].deadline}
                description={samplePostingsData[id].description}
                tasks={samplePostingsData[id].tasks}
                requirements={samplePostingsData[id].requirements}
                interest={samplePostingsData[id].interest}
            >
            </JobPosting>
        </div>
    )
}
