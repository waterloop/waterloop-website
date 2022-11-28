import React, { useCallback } from 'react';
import styled from 'styled-components';
// import TextInput from "../../components/TextInput";
// import RadioButton from "components/RecruitmentForm/RadioButton";
// import FileUpload from "components/FileUpload";
//import DropDownList from "../../components/DropDownList";
// import { Button } from "../../components/Button";
// //import useRecruitmentForm from '../../hooks/recruitment-form';
//import { useRouteMatch } from 'react-router-dom';
import { useParams, useHistory } from 'react-router';
import { RecruitmentForm } from '../../components/RecruitmentForm';
import usePostingPostingById from 'hooks/posting-by-id';

// const FormWrapper = styled.div`
//   margin: 3em 5em;
// `;

// const SectionHeader = styled.h3`
//   text-align: left;
//   font-family: IBM Plex Sans;
//   font-style: normal;
//   font-weight: 600;
//   font-size: 36px;
//   line-height: 47px;
//   color: #000000;
// `;

// const QuestionHeader = styled.h4`
//   text-align: left;
//   font-family: IBM Plex Sans;
//   font-style: normal;
//   font-weight: 600;
//   font-size: 24px;
//   color: #000000;
// `;

// const RadioText = styled.h4`
//   margin: auto;
//   text-align: left;
//   font-family: IBM Plex Sans;
//   font-style: normal;
//   font-weight: 600;
//   font-size: 24px;
//   color: #000000;
// `;

// const RightAlignedContainer = styled.div`
//   display: flex
//   align-items: flex-end;
// `;

// const SubmitButton = styled(Button)`
//   width: 100px;
//   margin-top: 3em;
// `;

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
  // const [firstName, setFirstName] = useState("");
  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFirstName(e.target.value);
  // };
  /*const {
   params: { positionId },
  } = useRouteMatch();
  const {

  } = useRecruitmentForm(positionId); */
  const history = useHistory();
  const stringId: RouteParams = useParams();
  const id: number = parseInt(stringId.positionId, 10);
  const onError = useCallback(() => {
    history.push(`/postings/${id}`);
  }, [history])
  const { posting } = usePostingPostingById(id, onError);
  return (
    <div className="pageContainer">
      <BackButton onClick={() => {}}>&lt; Back</BackButton>
      <FormContainer>
        {posting &&
          <RecruitmentForm 
            info={posting}
            onSuccess={() => console.log('hi')} 
          />
        }
      </FormContainer>
    </div>
  );
};

export default RecruitmentApplicantForm;
