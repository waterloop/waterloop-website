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
    // !NOTE: Below line is needed for bnackwards compatibility. Remove when fall recruitment season ends. 
    .hour(23).minute(59).second(59).millisecond(999)

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
          tasks={posting.tasks.map((task) => task.task)}
          requirements={posting.requirements.map((r) => r.requirement)}
          additional={posting.info.map((i) => i.info)}
          recommendedSkills={posting.recommendedSkills.map((i) => i.recommendedSkill)}
          skillsToBeLearned={posting.skillsToBeLearned.map((i) => i.skillToBeLearned)}
          timeCommitment={posting.timeCommitment}
        />
      )}
    </div>
  );
};

export default JobPostingPage;
