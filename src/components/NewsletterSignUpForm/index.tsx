import api from 'api';
import { Button } from 'components/Button';
import { NewsLetterSignUpRequest } from 'newsletter';
import React, { useReducer, useState } from 'react';
import styled from 'styled-components';
import '../../theme/styles.scss';
import Snackbar from '@mui/material/Snackbar';
import Alert, { AlertProps } from  '@mui/lab/Alert';


const Header = styled.h1`
  font-family: IBM Plex Sans;
  font-size: 36px;
  font-style: italic;
  font-weight: 600;
  line-height: 47px;
  letter-spacing: 0em;
  text-align: left;
  color: #010101;

`;

const Label = styled.label`
  font-family: IBM Plex Sans;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: left;
  color: #010101;


`;

const Input = styled.input`
  background: #F4F4F4;
  width: calc(100% - 15px);
  height: 30px;
  border: none;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
`;

type State = NewsLetterSignUpRequest;

interface UpdateFieldAction {
  field: keyof State,
  value: string;
  type: 'updateField';
}

interface ResetAction {
  type: 'reset';
}

type Action = UpdateFieldAction | ResetAction;

const initialState: State = {
  name: '',
  email: '',
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'updateField':
      return {
        ...state,
        [action.field]: action.value
      }
    case 'reset':
      return {
        ...initialState,
      }
  }
}


const NewsletterSignUpForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [snackBarOpen, setSnackBarOpen] = useState<boolean>(false);
  const [alertStatus, setAlertStatus] = useState<AlertProps['severity']>('success');
  const [alertMessage, setAlertMessage] = useState<string>('');

  const handleChange= (event: React.FormEvent<HTMLInputElement>) => {
    dispatch({ type: 'updateField', field: event.currentTarget.name as UpdateFieldAction["field"], value: event.currentTarget.value });
  }

  const handleSubmit = async () => {
    try {
      await api.newsletter.signUp(state);
      setAlertStatus('success');
      setAlertMessage('Sign up Successful');
      dispatch({ type: 'reset' })
      setSnackBarOpen(true);
    } catch {
      setAlertStatus('error');
      setAlertMessage('Unable to Sign up, Please try again');
      setSnackBarOpen(true);
    }
  }

  return (
    <Container>
      <Header>Sign Up for our Newsletter</Header>
        <Label htmlFor="name">Name</Label>
        <Input
          name="name"
          id="name"
          value={state.name}
          onChange={handleChange}
        />
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <div style={{ alignSelf: 'center', marginTop: '16px' }}>
          <Button
            backgroundColor="yellow"
            textColor="black"
            text="SIGN UP"
            onClick={handleSubmit}
          />
        </div>
        <Snackbar open={snackBarOpen} autoHideDuration={6000} onClose={(): void => setSnackBarOpen(false)}>
          <Alert elevation={6} variant="filled" severity={alertStatus}>
            {alertMessage}
          </Alert>
        </Snackbar>
    </Container>
  )
}

export default NewsletterSignUpForm
