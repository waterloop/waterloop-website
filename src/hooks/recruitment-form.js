// TODO: convert to TypeScript
import { useHistory } from 'react-router';

const useRecruitmentForm = (recruitmentFormId, input = {}) => {
  const history = useHistory();

  const exitForm = useCallback(() => {
    history.push('/postings');
  }, [history]);

  return {
    exitForm,
    inputFirstName,
    inputLastName,
    inputEmail,
    pickSchool,
    pickYear,
    inputProgram,
    inputInPerson,
    inputPosition, // might not be needed since this is auto-filled
    inputOtherPositions,
    inputWhyJoinTeam,
    inputAdditionalInfo,
    uploadDocuments,
    submitForm,
  };
};

export default useRecruitmentForm;
