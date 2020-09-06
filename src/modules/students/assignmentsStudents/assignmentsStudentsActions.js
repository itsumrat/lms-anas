import services from 'modules/students/assignmentsStudents/assignmentsStudentsServices';

const prefix = 'ASSIGNMENTS_STUDENTS';

var actions = {
  ERROR_MESSAGE_CLEARED: `${prefix}_ERROR_MESSAGE_CLEARED`,
  LIST_ASSIGNMENTS_START: `${prefix}_LIST_ASSIGNMENTS_START`,
  LIST_ASSIGNMENTS_SUCCESS: `${prefix}_LIST_ASSIGNMENTS_SUCCESS`,
  LIST_ASSIGNMENTS_ERROR: `${prefix}_LIST_ASSIGNMENTS_SUCCESS`,
  LIST_MATTERS_START: `${prefix}_LIST_MATTERS_START`,
  LIST_MATTERS_SUCCESS: `${prefix}_LIST_MATTERS_SUCCESS`,
  LIST_MATTERS_ERROR: `${prefix}_LIST_MATTERS_SUCCESS`,

  doClearErrorMessage() {
    return {
      type: actions.ERROR_MESSAGE_CLEARED,
    };
  },

  DoListMattersStudents: () => async (dispatch) => {
    try {
      var data = await services.listMatters();

      dispatch({
        type: actions.LIST_MATTERS_START,
      });

      dispatch({
        type: actions.LIST_MATTERS_SUCCESS,
        payload: {
          matters: data,
        },
      });
    } catch (e) {
      dispatch({
        type: actions.LIST_MATTERS_ERROR,
        payload: {
          errorMessage: 'Error',
        },
      });
    }
  },

  DoListAssignementsStudents: (id) => async (dispatch) => {
    try {
      var data = await services.listAssignements(id);

      dispatch({
        type: actions.LIST_ASSIGNMENTS_START,
      });

      dispatch({
        type: actions.LIST_ASSIGNMENTS_SUCCESS,
        payload: {
          assignments: data,
        },
      });
    } catch (e) {
      dispatch({
        type: actions.LIST_ASSIGNMENTS_ERROR,
        payload: {
          errorMessage: 'Error',
        },
      });
    }
  },
};

export default actions;
