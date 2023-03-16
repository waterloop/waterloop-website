import React, { useCallback } from 'react';
import JobPosting from './JobPosting';
import { useParams, useHistory, Redirect } from 'react-router';
import usePostingPostingById from 'hooks/posting-by-id';
import moment from 'moment';

interface RouteParams {
  id: string;
}

const JobPostingPage: React.FC = () => {
  const history = useHistory();
  const stringId: RouteParams = useParams();
  const id: number = parseInt(stringId.id, 10);
  const onError = useCallback(() => {
    history.push('/postings');
  }, [history])
  const { posting } = usePostingPostingById(id, onError);

  const deadline = posting && moment
    .utc(posting.deadline)
    .local()

  if (posting && (posting.closed || deadline.toDate().getTime() <= Date.now())) {
    return (<Redirect to='/recruitment' />);
  }
  return (
    <div className="pageContainer">
      {posting && (
        <JobPosting
          id={id}
          role={posting.title}
          subteam={posting.team}
          term={`${posting.termSeason} ${posting.termYear}`}
          deadline={deadline.format('MMMM D, h:mmA')}
          description={posting.description}
          tasks={posting.tasks.map((task) => task.task).filter((str) => str !== '')}
          requirements={posting.requirements.map((r) => r.requirement).filter((str) => str !== '')}
          additional={posting.info.map((i) => i.info).filter((str) => str !== '')}
          recommendedSkills={posting.recommendedSkills.map((i) => i.recommendedSkill).filter((str) => str !== '')}
          skillsToBeLearned={posting.skillsToBeLearned.map((i) => i.skillToBeLearned).filter((str) => str !== '')}
          timeCommitment={posting.timeCommitment}
        />
      )}
    </div>
  );
};

export default JobPostingPage;
