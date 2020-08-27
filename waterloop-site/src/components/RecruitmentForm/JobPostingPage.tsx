import React from 'react'
import JobPosting from './JobPosting'
import { samplePostingsData } from '../../pages/Recruitment';
import { useParams } from 'react-router';

const sampleData = 
    {
        role: "Goose Designer",
        deadline: "September 26, 2020",
        description: "Laboris incididunt officia culpa consequat dolor adipisicing ullamco ipsum ex. Sit ullamco anim fugiat sint velit. Sit tempor magna adipisicing aliqua anim veniam commodo. Nisi do cupidatat ut laborum commodo eu sunt ut sint. In non irure aliquip in culpa officia ex voluptate commodo sit nostrud cupidatat. Magna pariatur qui deserunt commodo. Ad aliqua proident do duis nisi est labore amet reprehenderit amet consectetur est nulla.",
        tasks: ["In magna magna eu laborum aliqua labore non in adipisicing commodo anim.", "Quis laborum duis aliqua labore quis amet nisi."],
        requirements: ["Strong grasp of javascript.", "Quis laborum duis aliqua labore quis amet nisi."],
        interest: ["Front End Web Development", "Quis laborum duis aliqua labore quis amet nisi."],
        termList: ["F19", "W20", "S20", "F20", "W21"],
    }


    interface RouteParams {
        id: number;
    }
export default function JobPostingPage() {

    
    let stringid : any = useParams();
    let id : number = parseInt(stringid.id) - 1;

    return (
        <div>
        {console.log(id)}
            <JobPosting
            role ={samplePostingsData[id].role}
            deadline = {samplePostingsData[id].deadline}
            description={sampleData.description}
            tasks={sampleData.tasks}
            requirements={sampleData.requirements}
            interest={sampleData.interest}
            >
            </JobPosting>
        </div>
    )
}
