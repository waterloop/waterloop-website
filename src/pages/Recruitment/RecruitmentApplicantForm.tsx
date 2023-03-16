import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router';
import { RecruitmentForm } from '../../components/RecruitmentForm';
import usePostingPostingById from 'hooks/posting-by-id';

const BackButton = styled.p`
  cursor: pointer;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

interface RouteParams {
  positionId: string;
}

const RecruitmentApplicantForm: React.FC = () => {
  const history = useHistory();
  const stringId: RouteParams = useParams();
  const id: number = parseInt(stringId.positionId, 10);
  const onError = useCallback(() => {
    history.push(`/postings/${id}`);
  }, [id, history])
  const { posting } = usePostingPostingById(id, onError);
  return (
    <div className="pageContainer">
      <BackButton onClick={() => {}}>&lt; Back</BackButton>
      <FormContainer>
        {posting &&
          <RecruitmentForm 
            info={posting}
            id={id}
            onSuccess={(): Window | null => {
              // ideally => pass info to recruitment page to show a banner
              //  of 'successfull completion'
              // eslint-disable-next-line no-alert
              alert('Application Successful. Good Luck!');
              return window.open(`/recruitment`, '_self')}} 

          />
        }
      </FormContainer>
    </div>
  );
};

export default RecruitmentApplicantForm;
