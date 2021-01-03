import React from 'react';
import JobPosting from './JobPosting';
import { w21Postings } from '../../static/consts/postings';
import { useParams } from 'react-router';

interface RouteParams {
  id: string;
}
const JobPostingPage: React.FC = () => {
  const stringId: RouteParams = useParams();
  const id: number = parseInt(stringId.id, 10);
  const posting = w21Postings.filter((posting) => posting.id === id)[0];

  return (
    <div className="pageContainer">
      <JobPosting
        role={posting.role}
        subteam={posting.subteam}
        term={posting.term}
        applicationForm={posting.applicationForm}
        deadline={posting.deadline}
        description={posting.description}
        tasks={posting.tasks}
        requirements={posting.requirements}
        additional={posting.additional}
      />
    </div>
  );
};

export default JobPostingPage;
