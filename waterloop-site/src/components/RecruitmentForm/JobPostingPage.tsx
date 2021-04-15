import React, { useCallback } from 'react';
import JobPosting from './JobPosting';
import moment from 'moment';
import { useParams, useHistory } from 'react-router';
import usePostingPostingById from 'hooks/posting-by-id';

interface RouteParams {
  id: string;
}
const applicationForm: string = '';

const JobPostingPage: React.FC = () => {
  const history = useHistory();
  const stringId: RouteParams = useParams();
  const id: number = parseInt(stringId.id, 10);
  const onError = useCallback(() => {
    history.push('/postings');
  }, [])
  const { posting } = usePostingPostingById(id, onError);

  return (
    <div className="pageContainer">
      {posting && (
        <JobPosting
          role={posting.title}
          subteam={posting.team}
          term={`${posting.termSeason} ${posting.termYear}`}
          applicationForm={applicationForm}
          deadline={moment(posting.deadline).format('MMMM D, h:mmA')}
          description={posting.description}
          tasks={posting.tasks.map((task) => task.task)}
          requirements={posting.requirements.map((r) => r.requirement)}
          additional={posting.info.map((i) => i.info)}
        />
      )}
    </div>
  );
};

export default JobPostingPage;
