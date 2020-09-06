import actions from 'modules/roomSession/live/roomSessionLiveActions';

const initialData = {
  room: null,
  loading: false,
  errorMessage: null,
};

export default (state = initialData, { type, payload }) => {
  if (type === actions.ERROR_MESSAGE_CLEARED) {
    return {
      ...state,
      errorMessage: null,
    };
  }

  if (type === actions.ROOM_START) {
    return {
      ...state,
      loading: true,
    };
  }

  if (type === actions.ROOM_SUCCESS) {
    return {
      ...state,
      loading: false,
      room: payload.room,
    };
  }

  if (type === actions.ROOM_ERROR) {
    return {
      ...state,
      loading: false,
    };
  }

  return state;
};
