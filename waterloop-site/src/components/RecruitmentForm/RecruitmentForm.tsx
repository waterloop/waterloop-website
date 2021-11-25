import React from 'react';
import '../../theme/styles.scss';
import styled from 'styled-components';

import useRecruitmentForm from './hooks/recruitment-form';
import RadioButton from './RadioButton';
import DropDownList from '../../components/DropDownList';
import FileUpload from '../../components/FileUpload';

const Label = styled.label`
  display: block;
  margin: 1%;
  margin-bottom: 7px;
`;

const RadioWrapper = styled.form`
  display: flex;
  justify-content: center;
`;

const Input = styled(({ valid, ...props }) => <input {...props} />)`
  text-align: left;
  display: inline-block;
  margin: 3%;
  width: 42%;
  height: 24px;
  padding: 5px;
  border: 0.5 px solid
    ${({ valid }): string => (valid === false ? 'red' : 'black')};
`;

const TextArea = styled(({ valid, ...props }) => <textarea {...props} />)`
  text-align: left;
  display: inline-block;
  margin: 3%;
  width: 75%;
  overflow: scroll;
  border-color: ${({ valid }): string => (valid === false ? 'red' : 'black')};
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

interface MyProps {
  role: string;
  technicalQ?: string;
  onSuccess: () => void;
}

const Form: React.FC<MyProps> = ({ role, technicalQ, onSuccess }) => {
  const {
    userInfoFields,
    applicationFields,
    // handleApplicationTermChange,
    updateUserInfo,
    handleSubmit,
    handleTechnicalAnswerChange,
    // handleTermTypeChange,
    handleWhyChange,
    // termTypes,
  } = useRecruitmentForm(role, onSuccess);

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
    />
  ));

  // const applicationTermRadioButtons = termList.map((term) => (
  //   <RadioButton
  //     checked={applicationFields.applicationTerm.value === term}
  //     onChange={handleApplicationTermChange(term)}
  //     name={term}
  //     key={term}
  //   />
  // ));

  // const termTypeRadioButtons = termTypes.map((type) => (
  //   <RadioButton
  //     checked={applicationFields.termType.value === type}
  //     onChange={handleTermTypeChange(type)}
  //     name={type}
  //     key={type}
  //   />
  // ));

  const inPersonRadioButtons = () => (
    <div>
      <RadioButton checked={true} onChange={() => {}} name="Yes" />
      <RadioButton checked={true} onChange={() => {}} name="No" />
    </div>
  );

  return (
    <div className="recruitment-modal">
      <h2>Applying for {role.toUpperCase()}</h2>

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
        />

        <Label>
          Will you be on school or on co-op during the term you're applying for?
        </Label>
        <DropDownList items={['School', 'Co-op', 'Other']} title="Select..." />

        <Label>What program are you in?</Label>
        <Input
          placeholder="e.g. Computer Science"
          id={0}
          name={'name'}
          value={'hello'}
          onChange={() => {}}
          valid={true}
        />

        <Label>
          Will you be living in Waterloo and willing to particiape in in-person
          work?
        </Label>
        <RadioWrapper>{inPersonRadioButtons}</RadioWrapper>

        <Label>Why do you want to join the team?</Label>
        <TextArea
          placeholder="Why do you want to join the team?"
          onChange={handleWhyChange}
          value={applicationFields.whyJoin.value}
          valid={applicationFields.whyJoin.valid}
        />
        {technicalQ && (
          <>
            <Label>Technical Question: {technicalQ}</Label>
            <TextArea
              placeholder={technicalQ}
              onChange={handleTechnicalAnswerChange}
              value={applicationFields.technicalAns.value}
              valid={applicationFields.technicalAns.valid}
            />
          </>
        )}
        <Label>
          Is there any additional information that you would like to share?{' '}
          <span>*Optional</span>
        </Label>
        <TextArea
          placeholder={technicalQ}
          onChange={handleTechnicalAnswerChange}
          value={applicationFields.technicalAns.value}
          valid={applicationFields.technicalAns.valid}
        />
        <FileUpload
          name="resume-docs"
          onChange={() => {
            console.log('file change');
          }}
          multiple={false}
        />
      </SectionContainer>

      <button className="button-yellow" onClick={handleSubmit}>
        SUBMIT
      </button>
    </div>
  );
};

export default Form;
