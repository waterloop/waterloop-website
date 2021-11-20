import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../../components/TextInput";
import RadioButton from "components/RecruitmentForm/RadioButton";
import FileUpload from "components/FileUpload";
//import DropDownList from "../../components/DropDownList";
import { Button } from "../../components/Button";
//import useRecruitmentForm from '../../hooks/recruitment-form';
//import { useRouteMatch } from 'react-router-dom';

const FormWrapper = styled.div`
  margin: 3em 5em;
`;

const SectionHeader = styled.h3`
  text-align: left;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 47px;
  color: #000000;
`;

const QuestionHeader = styled.h4`
  text-align: left;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #000000;
`;

const RadioText = styled.h4`
  margin: auto;
  text-align: left;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #000000;
`;

const RightAlignedContainer = styled.div`
  display: flex
  align-items: flex-end;
`;

const SubmitButton = styled(Button)`
  width: 100px;
  margin-top: 3em;
`;

const RecruitmentApplicantForm: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  /*const {
   params: { positionId },
  } = useRouteMatch();
  const {

  } = useRecruitmentForm(positionId); */
  return (
    <FormWrapper>
      <p onClick={() => {}}>&lt; Back</p>
      <FormWrapper>
        <SectionHeader>Contact Info</SectionHeader>
        <QuestionHeader>Full name</QuestionHeader>
        <TextInput
          className="first-name"
          multiLine={false}
          value={firstName}
          rows={10}
          onChange={onChange /* CHANGE THIS TO HOOK STUFF */}
          placeholder="First Name"
          required={true}
          requiredText="This is a required field"
          isError={false /* CHANGE THIS TO HOOK STUFF */}
        />

        <QuestionHeader>
          Are you living in Waterloo and willing to participate in in-person
          work?
        </QuestionHeader>
        <RadioText>
          <RadioButton
            checked={false}
            onChange={() => {}}
            name="Yes"
            question="inPerson"
          ></RadioButton>
        </RadioText>
        <RadioText>
          <RadioButton
            checked={false}
            onChange={() => {}}
            name="No"
            question="inPerson"
          ></RadioButton>
        </RadioText>

        <QuestionHeader>
          Please attach your Resume and other Documents
        </QuestionHeader>
        <FileUpload
          name="resume-docs"
          onChange={() => {
            console.log("file change");
          }}
          multiple={false}
        />
        <RightAlignedContainer>
          <SubmitButton
            onClick={
              () =>
                window.open(
                  "http://wloop.ca/subscribe"
                ) /*function from hook that posts to api after validating input*/
            }
            text="Submit"
            backgroundColor="yellow"
            textColor="black"
          />
        </RightAlignedContainer>
      </FormWrapper>
    </FormWrapper>
  );
};

export default RecruitmentApplicantForm;
