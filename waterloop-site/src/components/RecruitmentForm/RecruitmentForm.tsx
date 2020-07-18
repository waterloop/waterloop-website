import React from "react";
import styled from 'styled-components';
import "../../theme/global.scss";
import useRecruitmentForm from "./hooks/recruitment-form";
import RadioButton from './RadioButton';

const SubmitButton = styled.button`
  background-color: #FED138,
  font-size: large,
  font-family: IBM Plex Sans,
  font-weight: bold
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin: 1%;
`;

const Container = styled.div`
  text-align: center;
  background-color: white;
  padding-bottom: 16px;
  border: 1px solid black;
`;


const RadioWrapper = styled.form`
  display: flex;
  justify-content: center;
`;

const Header = styled.h2.attrs({
  className: 'Header-RecruitmentForm'
})`
  font-size: 170%;
  margin-bottom: 0px !important;
  text-align: center;
`;

const Input = styled(({ valid, ...props}) => <input {...props}/>)`
  text-align: left;
  display: inline-block;
  margin: 3%;
  width: 42%;
  border-color: ${({ valid }) => valid === false ? 'red' : 'black'}
`;

const TextArea = styled(({ valid, ...props}) => <textarea {...props}/>)`
  text-align: left;
  display: inline-block;
  margin: 3%;
  width: 90.7%;
  overflow: scroll;
  border-color: ${({ valid }) => valid === false ? 'red' : 'black'}
`;

interface MyProps {
  role: string;
  technicalQ: string;
  termList: [string, string, string, string, string];
  onSuccess: () => void;
};

const Form: React.FC<MyProps> = ({ role, technicalQ, termList, onSuccess }) => {
  const {
    userInfoFields,
    applicationFields,
    handleApplicationTermChange,
    updateUserInfo,
    handleSubmit,
    handleTechnicalAnswerChange,
    handleTermTypeChange,
    handleWhyChange,
    termTypes,
  } = useRecruitmentForm(role, onSuccess);

  const handleUserInfoChange = (id: string) =>
    (event: React.ChangeEvent<HTMLInputElement>) => updateUserInfo(id, event.target.value);

  const userInfoInputs = userInfoFields.map(field => (
    <Input
      key={field.id}
      placeholder={field.placeholder}
      id={field.id}
      name={field.name}
      value={field.value}
      onChange={handleUserInfoChange(field.id)}
      valid={field.valid}
    />
  ));

  const applicationTermRadioButtons = termList.map((term) => (
    <RadioButton
      checked={applicationFields.applicationTerm.value === term}
      onChange={handleApplicationTermChange(term)}
      name={term}
      key={term}
    />
  ));

  const termTypeRadioButtons = termTypes.map(type => (
    <RadioButton
      checked={applicationFields.termType.value === type}
      onChange={handleTermTypeChange(type)}
      name={type}
      key={type}
    />
  ));

  return (
    <Container>
      <Header>
        Applying for {role.toUpperCase()}
      </Header>
      {userInfoInputs}
      <hr />
      <Label>
        Term you're applying for:
      </Label>
      <RadioWrapper>
        {applicationTermRadioButtons}
      </RadioWrapper>
      <hr />
      <Label>
        Term type for the term you're applying for:
      </Label>
      <RadioWrapper>
        {termTypeRadioButtons}
      </RadioWrapper>
      <hr />
      <Label>
        Why do you want to join the team?
      </Label>
      <TextArea
        placeholder="Why do you want to join the team?"
        onChange={handleWhyChange}
        value={applicationFields.whyJoin.value}
        valid={applicationFields.whyJoin.valid}
      />
      <Label>Technical Question: {technicalQ}</Label>
      <TextArea
        placeholder={technicalQ}
        onChange={handleTechnicalAnswerChange}
        value={applicationFields.technicalAns.value}
        valid={applicationFields.technicalAns.valid}
      />
      <SubmitButton onClick={handleSubmit}>
        <b>Submit</b>
      </SubmitButton>
    </Container>
  );
};

export default Form;
