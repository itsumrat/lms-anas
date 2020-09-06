import actions from './assignmentsStudentsActions.js';
const initialData = {
  assignments: [],
  matters: [],
  loading: false,
  errorMessage: '',
};

const assignmentsStudents = (
  state = initialData,
  { type, payload },
) => {
  if (type === actions.LIST_ASSIGNMENTS_START) {
    return {
      ...state,
      loading: true,
    };
  }
  if (type === actions.LIST_ASSIGNMENTS_SUCCESS) {
    return {
      ...state,
      assignments: payload.assignments || [],
      loading: false,
    };
  }

  if (type === actions.LIST_ASSIGNMENTS_ERROR) {
    return {
      ...state,
      loading: false,
      errorMessage: payload.errorMessage,
    };
  }

  if (type === actions.LIST_MATTERS_START) {
    return {
      ...state,
      loading: true,
    };
  }
  if (type === actions.LIST_MATTERS_SUCCESS) {
    return {
      ...state,
      matters: payload.matters || [],
      loading: false,
    };
  }

  if (type === actions.LIST_MATTERS_ERROR) {
    return {
      ...state,
      loading: false,
      errorMessage: payload.errorMessage,
    };
  }
  return state;
};

export default assignmentsStudents;
