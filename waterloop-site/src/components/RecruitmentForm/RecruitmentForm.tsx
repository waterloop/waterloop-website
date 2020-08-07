import React from "react";
import styled from "styled-components";
import "../../theme/global.scss";
import useRecruitmentForm from "./hooks/recruitment-form";
import RadioButton from "./RadioButton";

const Label = styled.label`
  font-family: "IBM Plex Sans";
  font-weight: bold;
  display: block;
  margin: 1%;
  margin-bottom: 7px;
`;

const RadioWrapper = styled.form`
  display: flex;
  justify-content: center;
`;

const Header = styled.h2.attrs({
  className: "Header-RecruitmentForm",
})`
  font-size: 170%;
  margin: 0 0 25px 15px !important;
  text-align: center;
`;

const Input = styled(({ valid, ...props }) => <input {...props} />)`
  text-align: left;
  display: inline-block;
  margin: 3%;
  width: 42%;
  height: 24px;
  padding: 5px;
  border: 0.5 px solid ${({ valid }) => (valid === false ? "red" : "black")};
`;

const TextArea = styled(({ valid, ...props }) => <textarea {...props} />)`
  text-align: left;
  font-family: "IBM Plex Sans";
  display: inline-block;
  margin: 3%;
  width: 75%;
  overflow: scroll;
  border-color: ${({ valid }) => (valid === false ? "red" : "black")};
`;

interface MyProps {
  role: string;
  technicalQ: string;
  termList: [string, string, string, string, string];
  onSuccess: () => void;
}

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

  const handleUserInfoChange = (id: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => updateUserInfo(id, event.target.value);

  const userInfoInputs = userInfoFields.map((field) => (
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

  const termTypeRadioButtons = termTypes.map((type) => (
    <RadioButton
      checked={applicationFields.termType.value === type}
      onChange={handleTermTypeChange(type)}
      name={type}
      key={type}
    />
  ));

  return (
    <div className="recruitment-modal">
      <Header>Applying for {role.toUpperCase()}</Header>
      <div>{userInfoInputs}</div>
      <hr />
      <Label>Term you're applying for:</Label>
      <RadioWrapper>{applicationTermRadioButtons}</RadioWrapper>
      <hr />
      <Label>Term type for the term you're applying for:</Label>
      <RadioWrapper>{termTypeRadioButtons}</RadioWrapper>
      <hr />
      <Label>Why do you want to join the team?</Label>
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
      <button className="button-yellow" onClick={handleSubmit}>
        SUBMIT
      </button>
    </div>
  );
};

export default Form;
