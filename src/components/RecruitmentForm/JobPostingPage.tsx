import React, { useCallback } from 'react';
import JobPosting from './JobPosting';
import moment from 'moment';
import { useParams, useHistory, Redirect } from 'react-router';
import usePostingPostingById from 'hooks/posting-by-id';

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

  if (posting && (posting.closed || moment
    .utc(posting.deadline)
    .local()
    .hour(23)
    .minute(59)
    .second(0)
    .toDate().getTime() <= Date.now())) {
    return (<Redirect to='/recruitment' />);
  }

  return (
    <div className="pageContainer">
      {posting && (
        <JobPosting
          role={posting.title}
          subteam={posting.team}
          term={`${posting.termSeason} ${posting.termYear}`}
          deadline={
            moment
              .utc(posting.deadline)
              .local()
              .hour(23)
              .minute(59)
              .second(0)
              .format('MMMM D, h:mmA')}
          description={posting.description}
          tasks={posting.tasks.map((task) => task.task)}
          requirements={posting.requirements.map((r) => r.requirement)}
          additional={posting.info.map((i) => i.info)}
          recommendedSkills={posting.recommendedSkills.map((i) => i.recommendedSkill)}
          skillsToBeLearned={posting.skillsToBeLearned.map((i) => i.skillToBeLearned)}
        />
      )}
    </div>
  );
};

export default JobPostingPage;
