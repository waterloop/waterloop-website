import React from 'react';
import styled from 'styled-components';
//import { useRouteMatch } from 'react-router-dom';
import { TextInput } from "../../components/TextInput"
//import useRecruitmentForm from '../../hooks/recruitment-form';
import { Button } from '../../components/Button';
//import DropDownList from '../../../components/DropDownList';
//import TextInput from '../../../components/TextInput';

const Wrapper = styled.div`
  margin: 3em 4em 3em 4em;
`;

const SubmitButton = styled(Button)`
  width: 100px;
`;

const RecruitmentApplicantForm: React.FC = () => {
  const { params: { positionId } } = useRouteMatch();
  //const {

  //} = useRecruitmentForm(positionId);
  return (
    <div>
      <p>&lt; Back</p>
      <Wrapper>
        <h3>Contact Info</h3>
        <h4>Full name</h4>
        <input id="firstname" type="text" placeholder="First name"></input>
        <input id="lastname" type="text" placeholder="Last name"></input>
        <h4>Email</h4>
        <input id="email" type="email" placeholder="Email address"></input>
      </Wrapper>
      <SubmitButton
        onClick={() => window.open('http://wloop.ca/subscribe')}
        text="Submit"
        backgroundColor="yellow"
        textColor="black"
      />
    </div>
  );
};

export default RecruitmentApplicantForm;
