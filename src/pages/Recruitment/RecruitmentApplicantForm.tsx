import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../../components/TextInput";
import RadioButton from "components/RecruitmentForm/RadioButton";
//import DropDownList from "../../components/DropDownList";
import { Button } from "../../components/Button";
//import useRecruitmentForm from '../../hooks/recruitment-form';
//import { useRouteMatch } from 'react-router-dom';

const Wrapper = styled.div`
  margin: 3em 4em 3em 4em;
`;

const SubmitButton = styled(Button)`
  width: 100px;
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
    <div>
      <p>&lt; Back</p>
      <Wrapper>
        <h3>Contact Info</h3>
        <h4>Full name</h4>
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
        <h4>Email</h4>
        <input id="email" type="email" placeholder="Email address"></input>
      </Wrapper>
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
    </div>
  );
};

export default RecruitmentApplicantForm;
