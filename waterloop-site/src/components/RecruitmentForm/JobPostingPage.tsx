import React from 'react';
import JobPosting from './JobPosting';
import { samplePostingsData } from '../../static/consts/postings';
import { useParams } from 'react-router';

interface RouteParams {
  id: string;
}
const JobPostingPage: React.FC = () => {
  const stringId: RouteParams = useParams();
  const id: number = parseInt(stringId.id, 10) - 1;

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
        additional={samplePostingsData[id].additional}
      />
    </div>
  );
};

export default JobPostingPage;
