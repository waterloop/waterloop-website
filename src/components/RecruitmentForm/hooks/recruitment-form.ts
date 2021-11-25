import { useReducer, useCallback, useState, useEffect } from 'react';

interface UserInfoField {
  id: string;
  placeholder: string;
  name: string;
  value: string;
  valid: boolean | null;
}

interface InPersonValue {
  id: string;
  value: boolean | null;
  valid: boolean | null;
}

interface FormValue {
  value: string;
  id: string;
  valid: boolean | null;
}

// 0-------------------------0
// |                         |
// |         UPDATE ME       |
// |                         |
// 0-------------------------0

const termTypes = [
  'Not in Waterloo',
  'School Term',
  'Work/Off Term in Waterloo',
];

const userInfoFields: UserInfoField[] = [
  {
    id: 'entry.1105765972',
    placeholder: 'First Name',
    name: 'first-name',
    value: '',
    valid: null,
  },
  {
    id: 'entry.1105765972',
    placeholder: 'Last Name',
    name: 'first-name',
    value: '',
    valid: null,
  },
  {
    id: 'entry.204636100',
    placeholder: 'Email address',
    name: 'email',
    value: '',
    valid: null,
  },
];

const inPersonField: Record<string, InPersonValue> = {
  inperson: {
    id: 'entry.<change>',
    value: null,
    valid: null,
  },
};

const applicationFields: Record<string, FormValue> = {
  term: {
    value: '',
    id: 'entry.2092532677',
    valid: null,
  },
  termType: {
    value: '',
    id: 'entry.1337056366',
    valid: null,
  },
  program: {
    value: '',
    id: 'entry.<change>',
    valid: null,
  },
  whyJoin: {
    id: 'entry.288252419',
    value: '',
    valid: null,
  },
  technicalAns: {
    value: '',
    id: 'entry.1372043873',
    valid: null,
  },
  additionalInfo: {
    value: '',
    id: 'entry.<change>',
    valid: null,
  },
};

// Need to add something for the resume as well

// 0-------------------------0
// |                         |
// |     End of UPDATE ME    |
// |                         |
// 0-------------------------0

// 0---------------------------0
//     Reducer Hook Logic
// 0---------------------------0

const initialState = {
  userInfoFields,
  inPersonField,
  applicationFields,
  isValid: false,
};

// Reducer Action Types
const UPDATE_USER_INFO_FIELD = 'UPDATE_USER_INFO_FIELD';
const UPDATE_TERM = 'UPDATE_TERM';
const UPDATE_TERM_TYPE = 'UPDATE_TERM_TYPE';
const UPDATE_PROGRAM = 'UPDATE_PROGRAM';
const UPDATE_INPERSON = 'UPDATE_INPERSON';
const UPDATE_WHY = 'UPDATE_WHY';
const UPDATE_TECHNICAL_ANSWER = 'UPDATE_TECHNICAL_ANSWER';
const UPDATE_ADDITIONAL_INFO = 'UPDATE_ADDITIONAL_INFO';
const VERIFY_FORM = 'VERIFY_FORM';

// Action Interfaces
interface UpdateUserInfoFieldAction {
  type: typeof UPDATE_USER_INFO_FIELD;
  payload: {
    id: string;
    value: string;
  };
}

interface UpdateTermAction {
  type: typeof UPDATE_TERM;
  payload: {
    term: string;
  };
}

interface UpdateTermTypeAction {
  type: typeof UPDATE_TERM_TYPE;
  payload: {
    type: string;
  };
}

interface UpdateProgramAction {
  type: typeof UPDATE_PROGRAM;
  payload: {
    value: string;
  };
}

interface UpdateInPersonAction {
  type: typeof UPDATE_INPERSON;
  payload: {
    inperson: boolean;
  };
}

interface UpdateWhyAction {
  type: typeof UPDATE_WHY;
  payload: {
    value: string;
  };
}

interface UpdateTechnicalAnswerAction {
  type: typeof UPDATE_TECHNICAL_ANSWER;
  payload: {
    value: string;
  };
}

interface UpdateAdditionalInfoAction {
  type: typeof UPDATE_ADDITIONAL_INFO;
  payload: {
    value: string;
  };
}

interface VerifyFormAction {
  type: typeof VERIFY_FORM;
}

// Combines All action Interfaces into a single type
type MyAction =
  | UpdateUserInfoFieldAction
  | UpdateTermAction
  | UpdateTermTypeAction
  | UpdateProgramAction
  | UpdateInPersonAction
  | UpdateWhyAction
  | UpdateTechnicalAnswerAction
  | UpdateAdditionalInfoAction
  | VerifyFormAction;

/**
 * Rather than trying to keep initialState inline
 * with the state interface, we dynamically build
 * the state type on the initialState. We can do this
 * because initialState is immutable
 */
type MyState = typeof initialState;

const reducer: React.Reducer<MyState, MyAction> = (state, action) => {
  /**
   * Here, typescript takes advantage of the MyAction Type
   * Depending on the value of `action.type`, typescript will
   * be able to dynamically determine the structure of payload
   * using the actionInterfaces above
   */
  switch (action.type) {
    case UPDATE_USER_INFO_FIELD: {
      const { payload } = action;
      return {
        ...state,
        userInfoFields: state.userInfoFields.map((field) =>
          field.id === payload.id
            ? { ...field, value: payload.value, valid: payload.value !== '' }
            : field,
        ),
      };
    }
    case UPDATE_TERM: {
      const {
        payload: { term },
      } = action;
      return {
        ...state,
        applicationFields: {
          ...state.applicationFields,
          term: {
            ...state.applicationFields.term,
            value: term,
            valid: term !== '',
          },
        },
      };
    }
    case UPDATE_TERM_TYPE: {
      const {
        payload: { type },
      } = action;
      return {
        ...state,
        applicationFields: {
          ...state.applicationFields,
          termType: {
            ...state.applicationFields.termType,
            value: type,
            valid: type !== '',
          },
        },
      };
    }
    case UPDATE_PROGRAM: {
      const {
        payload: { value },
      } = action;
      return {
        ...state,
        applicationFields: {
          ...state.applicationFields,
          program: {
            ...state.applicationFields.program,
            value,
            valid: value !== '',
          },
        },
      };
    }
    case UPDATE_INPERSON: {
      const {
        payload: { inperson },
      } = action;
      return {
        ...state,
        inPersonField: {
          inperson: {
            ...state.inPersonField.inperson,
            value: inperson,
            valid: inperson !== null,
          },
        },
      };
    }
    case UPDATE_WHY: {
      const {
        payload: { value },
      } = action;
      return {
        ...state,
        applicationFields: {
          ...state.applicationFields,
          whyJoin: {
            ...state.applicationFields.whyJoin,
            value,
            valid: value !== '',
          },
        },
      };
    }
    case UPDATE_TECHNICAL_ANSWER: {
      const {
        payload: { value },
      } = action;
      return {
        ...state,
        applicationFields: {
          ...state.applicationFields,
          technicalAns: {
            ...state.applicationFields.technicalAns,
            value,
            valid: value !== '',
          },
        },
      };
    }
    case UPDATE_ADDITIONAL_INFO: {
      const {
        payload: { value },
      } = action;
      return {
        ...state,
        applicationFields: {
          ...state.applicationFields,
          additionalInfo: {
            ...state.applicationFields.additionalInfo,
            value,
            valid: value !== '',
          },
        },
      };
    }
    case VERIFY_FORM:
      return {
        ...state,
        userInfoFields: state.userInfoFields.map((field) => ({
          ...field,
          valid: field.value !== '',
        })),
        applicationFields: Object.keys(state.applicationFields).reduce(
          (acc, key) => ({
            ...acc,
            [key]: {
              ...state.applicationFields[key],
              valid: state.applicationFields[key].value !== '',
            },
          }),
          {},
        ),
      };
    default:
      return {
        ...state,
      };
  }
};

// 0---------------------------0
//   END OF Reducer Hook Logic
// 0---------------------------0

interface RecruitmentForm {
  userInfoFields: UserInfoField[];
  inPersonField: typeof inPersonField;
  applicationFields: typeof applicationFields;
  updateUserInfo: (id: string, value: string) => void;
  handleProgramChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  updateTerm: (value: string) => () => void;
  updateTermType: (value: string) => () => void;
  updateInPerson: (value: boolean) => () => void;
  handleWhyChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleTechnicalAnswerChange: (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  handleAdditionalInfoChange: (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  handleSubmit: React.EffectCallback;
}

type RecruitmentFormHook = (
  role: string,
  onSuccess: () => void,
) => RecruitmentForm;

const useRecruitmentForm: RecruitmentFormHook = (role, onSuccess) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const updateUserInfo = useCallback(
    (id: string, value: string) =>
      !isSubmitting &&
      dispatch({ type: UPDATE_USER_INFO_FIELD, payload: { id, value } }),
    [dispatch, isSubmitting],
  );

  const updateProgram = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      !isSubmitting &&
      dispatch({
        type: UPDATE_PROGRAM,
        payload: { value: event.target.value },
      }),
    [dispatch, isSubmitting],
  );

  const updateTerm = useCallback(
    (term: string) => () =>
      !isSubmitting && dispatch({ type: UPDATE_TERM, payload: { term } }),
    [dispatch, isSubmitting],
  );

  const updateTermType = useCallback(
    (type: string) => () =>
      !isSubmitting && dispatch({ type: UPDATE_TERM_TYPE, payload: { type } }),
    [dispatch, isSubmitting],
  );

  const updateInPerson = useCallback(
    (inperson: boolean) => () =>
      !isSubmitting &&
      dispatch({ type: UPDATE_INPERSON, payload: { inperson } }),
    [dispatch, isSubmitting],
  );

  const updateWhy = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) =>
      !isSubmitting &&
      dispatch({ type: UPDATE_WHY, payload: { value: event.target.value } }),
    [dispatch, isSubmitting],
  );

  const updateTechnicalAnswer = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) =>
      !isSubmitting &&
      dispatch({
        type: UPDATE_TECHNICAL_ANSWER,
        payload: { value: event.target.value },
      }),
    [dispatch, isSubmitting],
  );

  const updateAdditionalInfo = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) =>
      !isSubmitting &&
      dispatch({
        type: UPDATE_ADDITIONAL_INFO,
        payload: { value: event.target.value },
      }),
    [dispatch, isSubmitting],
  );

  const handleSubmit = useCallback(() => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    // Build Body
    const { applicationFields, userInfoFields } = state;
    const presetBody = { 'entry.1805132656': role };
    const userInfoFieldsBody = userInfoFields.reduce(
      (acc, field) => ({ ...acc, [field.id]: field.value }),
      presetBody,
    );
    const body = Object.keys(applicationFields).reduce(
      (acc, key) => ({
        ...acc,
        [applicationFields[key].id]: applicationFields[key].value,
      }),
      userInfoFieldsBody,
    );

    // Validate form and Stop if inValid
    const invalidFields = Object.values(body).filter(
      (fieldValue) => fieldValue === '',
    );
    if (invalidFields.length > 0) {
      dispatch({ type: VERIFY_FORM });
      setIsSubmitting(false);
      // TODO implement a better alert system
      // eslint-disable-next-line no-alert
      alert('Could not submit: Please fill out all highlighted fields.');
      return;
    }

    // Submit Form
    // fetch(formSubmissionUrl, {
    //   method: 'POST',
    //   body: JSON.stringify(body),
    // })
    //   .then(() => {
    //     onSuccess();
    //   })
    //   .catch(() => setIsSubmitting(false));
  }, [role, state, dispatch, setIsSubmitting, isSubmitting, onSuccess]);

  return {
    userInfoFields: state.userInfoFields,
    inPersonField: state.inPersonField,
    applicationFields: state.applicationFields,
    updateUserInfo,
    handleProgramChange: updateProgram,
    updateTerm,
    updateTermType,
    updateInPerson,
    handleWhyChange: updateWhy,
    handleTechnicalAnswerChange: updateTechnicalAnswer,
    handleAdditionalInfoChange: updateAdditionalInfo,
    handleSubmit,
  };
};

export default useRecruitmentForm;
