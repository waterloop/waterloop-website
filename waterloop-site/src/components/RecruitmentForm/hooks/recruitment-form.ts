import { useReducer, useCallback, useState } from 'react';

interface FormValue {
  value: string;
  id: string;
  valid: boolean | null;
}

interface UserInfoField {
  value: string;
  id: string;
  valid: boolean | null;
  placeholder: string;
  name: string;
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
    placeholder: 'Full Name',
    name: 'full-name',
    value: '',
    valid: null,
  },
  {
    id: 'entry.204636100',
    name: 'email',
    placeholder: 'Email',
    value: '',
    valid: null,
  },
  {
    id: 'entry.1369449321',
    name: 'program',
    placeholder: 'Program',
    value: '',
    valid: null,
  },
  {
    id: 'entry.1488954434',
    name: 'term',
    placeholder: 'Your Current Term (ex. 2A)',
    value: '',
    valid: null,
  },
];

const applicationFields: Record<string, FormValue> = {
  applicationTerm: {
    value: '',
    id: 'entry.2092532677',
    valid: null,
  },
  termType: {
    value: '',
    id: 'entry.1337056366',
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
};

const formSubmissionUrl = '/forms/u/0/d/e/1FAIpQLSdmZSfD1Hs0D3MLBjAfdUkaCb3GJJxIvKUEVJCBf5hVxZTt4g/formResponse';

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
  applicationFields,
  isValid: false,
};

// Reducer Action Types
const UPDATE_USER_INFO_FIELD = 'UPDATE_USER_INFO_FIELD';
const UPDATE_APPLICATION_TERM = 'UPDATE_APPLICATION_TERM';
const UPDATE_TERM_TYPE = 'UPDATE_TERM_TYPE';
const UPDATE_WHY = 'UPDATE_WHY';
const UPDATE_TECHNICAL_ANSWER = 'UPDATE_TECHNICAL_ANSWER';
const VERIFY_FORM = 'VERIFY_FORM';

// Action Interfaces
interface UpdateUserInfoFieldAction {
  type: typeof UPDATE_USER_INFO_FIELD;
  payload: {
    id: string;
    value: string;
  };
}

interface UpdateApplicationTermAction {
  type: typeof UPDATE_APPLICATION_TERM;
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

interface VerifyFormAction {
  type: typeof VERIFY_FORM;
}

// Combines All action Interfaces into a single type
type MyAction =
  | UpdateUserInfoFieldAction
  | UpdateApplicationTermAction
  | UpdateTermTypeAction
  | UpdateWhyAction
  | UpdateTechnicalAnswerAction
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
        userInfoFields: state.userInfoFields.map((field) => (field.id === payload.id
          ? { ...field, value: payload.value, valid: payload.value !== '' }
          : field)),
      };
    }
    case UPDATE_APPLICATION_TERM: {
      const { payload } = action;
      return {
        ...state,
        applicationFields: {
          ...state.applicationFields,
          applicationTerm: {
            ...state.applicationFields.applicationTerm,
            value: payload.term,
            valid: payload.term !== '',
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
  applicationFields: typeof applicationFields;
  termTypes: string[];
  updateUserInfo: (id: string, value: string) => void;
  handleApplicationTermChange: (term: string) => () => void;
  handleSubmit: React.EffectCallback;
  handleTermTypeChange: (type: string) => () => void;
  handleWhyChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleTechnicalAnswerChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

type RecruitmentFormHook = (role: string, onSuccess: () => void) => RecruitmentForm;

const useRecruitmentForm: RecruitmentFormHook = (role, onSuccess) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateUserInfo = useCallback(
    (id: string, value: string) => !isSubmitting
      && dispatch({ type: UPDATE_USER_INFO_FIELD, payload: { id, value } }),
    [dispatch, isSubmitting],
  );

  const updateApplicationTerm = useCallback(
    (term: string) => (): void | boolean => !isSubmitting
      && dispatch({ type: UPDATE_APPLICATION_TERM, payload: { term } }),
    [dispatch, isSubmitting],
  );

  const updateTermType = useCallback(
    (type: string) => (): void | boolean => !isSubmitting
      && dispatch({ type: UPDATE_TERM_TYPE, payload: { type } }),
    [dispatch, isSubmitting],
  );

  const updateWhy = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => !isSubmitting
      && dispatch({ type: UPDATE_WHY, payload: { value: event.target.value } }),
    [dispatch, isSubmitting],
  );

  const updateTechnicalAnswer = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => !isSubmitting
      && dispatch({
        type: UPDATE_TECHNICAL_ANSWER,
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
    fetch(formSubmissionUrl, {
      method: 'POST',
      body: JSON.stringify(body),
    })
      .then(() => {
        onSuccess();
      })
      .catch(() => setIsSubmitting(false));
  }, [role, state, dispatch, setIsSubmitting, isSubmitting, onSuccess]);

  return {
    userInfoFields: state.userInfoFields,
    applicationFields: state.applicationFields,
    termTypes,
    updateUserInfo,
    handleApplicationTermChange: updateApplicationTerm,
    handleSubmit,
    handleTermTypeChange: updateTermType,
    handleWhyChange: updateWhy,
    handleTechnicalAnswerChange: updateTechnicalAnswer,
  };
};

export default useRecruitmentForm;
