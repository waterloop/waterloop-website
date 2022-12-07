import React from 'react';
import '../../theme/styles.scss';
import styled from 'styled-components';

import useRecruitmentForm from './hooks/recruitment-form';
import RadioButton from './RadioButton';
import DropDownList from '../../components/DropDownList';
import FileUpload from '../../components/FileUpload';
import { PostingLongConverted } from 'postings';

const Label = styled.label`
  display: block;
  margin: 1%;
  margin-bottom: 7px;
`;

const RadioWrapper = styled.form`
  display: flex;
  justify-content: center;
`;

const Input = styled(({ valid, required, ...props }) => <input {...props} />)`
  text-align: left;
  diplay: inline-block;
  width: 42%;
  height: 20px;
  margin: 5px 10px;
  padding: 5px;
  border-radius: 6px;
  border: 1.2px solid
    ${({ valid, required }): string =>
      valid === false && required === true ? 'red' : '#c4c4c4'};
`;

const TextArea = styled(({ valid, required, ...props }) => (
  <textarea {...props} />
))`
  text-align: left;
  display: inline-block;
  margin: 5px 10px;
  padding: 16px;
  width: 90%;
  border: 1.2px solid;
  border-radius: 6px;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  border-color: ${({ valid, required }): string =>
    valid === false && required === true ? 'red' : '#c4c4c4'};
`;

const SectionContainer = styled.div`
  padding: 3em 5em 3em 5em;
`;

const SectionHeader = styled.h3`
  text-align: left;
  width: 100%;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
`;

interface FormProps {
  info: PostingLongConverted;
  technicalQ?: string;
  onSuccess: () => void;
}

const Form: React.FC<FormProps> = ({ info, technicalQ, onSuccess }) => {
  const {
    userInfoFields,
    inPersonField,
    applicationFields,
    updateUserInfo,
    handleProgramChange,
    updateTerm,
    updateTermType,
    updateInPerson,
    handleWhyChange,
    handleTechnicalAnswerChange,
    handleAdditionalInfoChange,
    handleSubmit,
    handleFileUpload,
  } = useRecruitmentForm(info.title, onSuccess);

  const handleUserInfoChange = (id: string) => (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => updateUserInfo(id, event.target.value);

  const userInfoInputs = userInfoFields.map((field) => (
    <Input
      key={field.id}
      placeholder={field.placeholder}
      id={field.id}
      name={field.name}
      value={field.value}
      onChange={handleUserInfoChange(field.id)}
      valid={field.valid}
      required={true}
    />
  ));
    //console.log(Object.keys(info))
    if(info == undefined) console.log("hello")
  return (
    <div className="recruitment-modal">
      <h2>Applying for {info.title.toUpperCase()}</h2>

      <SectionHeader>Contact Info</SectionHeader>
      <SectionContainer>
        <div>{userInfoInputs}</div>
      </SectionContainer>

      <SectionHeader>About You</SectionHeader>
      <SectionContainer>
        <Label>Which term will you be going into?</Label>
        <DropDownList
          items={[
            '1A',
            '1B',
            '2A',
            '2B',
            '3A',
            '3B',
            '4A',
            '4B',
            'Graduate Studies',
            'Other',
          ]}
          title="Select..."
          handleClickItem={updateTerm}
          value={applicationFields.term.value}
          valid={applicationFields.term.valid}
          required={true}
        />

        <Label>
          Will you be on school or on co-op during the term you're applying for?
        </Label>
        <DropDownList
          items={['School', 'Co-op', 'Other']}
          title="Select..."
          handleClickItem={updateTermType}
          value={applicationFields.termType.value}
          valid={applicationFields.termType.valid}
          required={true}
        />

        <Label>What program are you in?</Label>
        <Input
          placeholder="e.g. Computer Science"
          id={applicationFields.program.id}
          name={applicationFields.program.id}
          onChange={handleProgramChange}
          value={applicationFields.program.value}
          valid={applicationFields.program.valid}
          required={true}
        />

        <Label>
          Will you be living in Waterloo and willing to participate in in-person
          work?
        </Label>
        <RadioWrapper>
          <RadioButton
            checked={inPersonField.inperson.value === true}
            onChange={updateInPerson(true)}
            name="Yes"
            key="Yes"
          />
          <RadioButton
            checked={inPersonField.inperson.value === false}
            onChange={updateInPerson(false)}
            name="No"
            key="No"
          />
        </RadioWrapper>

        <Label>Why do you want to join the team?</Label>
        <TextArea
          placeholder="Why do you want to join the team?"
          onChange={handleWhyChange}
          value={applicationFields.whyJoin.value}
          valid={applicationFields.whyJoin.valid}
          required={true}
        />
        {technicalQ && (
          <>
            <Label>Technical Question: {technicalQ}</Label>
            <TextArea
              placeholder={technicalQ}
              onChange={handleTechnicalAnswerChange}
              value={applicationFields.technicalAns.value}
              valid={applicationFields.technicalAns.valid}
              required={true}
            />
          </>
        )}
        <Label>
          Is there any additional information that you would like to share?{' '}
          <span>*Optional</span>
        </Label>
        <TextArea
          placeholder="Anything else you want to share with us!"
          onChange={handleAdditionalInfoChange}
          value={applicationFields.additionalInfo.value}
          valid={applicationFields.additionalInfo.valid}
          required={false}
        />
        <Label>Please submit a PDF of your resume</Label>
        <FileUpload
          name="resume-docs"
          multiple={false}
          handleFileUpload={handleFileUpload}
        />
      </SectionContainer>

      <button className="button-yellow" onClick={handleSubmit}>
        SUBMIT
      </button>
    </div>
  );
};

export default Form;
