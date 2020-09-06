import actions from 'modules/room/roomAction';

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

  if (type === actions.ROOM_PROFILE_START) {
    return {
      ...state,
      loading: true,
    };
  }

  if (type === actions.ROOM_PROFILE_SUCCESS) {
    return {
      ...state,
      loading: false,
      room: payload.room,
    };
  }

  if (type === actions.ROOM_PROFILE_ERROR) {
    return {
      ...state,
      loading: false,
    };
  }

  return state;
};
