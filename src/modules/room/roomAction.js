import service from 'modules/room/roomService';
import Errors from 'modules/shared/error/errors';
import Message from 'view/shared/message';
import { i18n } from 'i18n';
import { getHistory } from 'modules/store';
import { getStore } from 'modules/store';
import { getLanguageCode } from 'i18n';

const prefix = 'ROOM';

const actions = {
  ERROR_MESSAGE_CLEARED: `${prefix}_ERROR_MESSAGE_CLEARED`,

  ROOM_PROFILE_START: `${prefix}_ROOM_PROFILE_START`,
  ROOM_PROFILE_SUCCESS: `${prefix}_ROOM_PROFILE_SUCCESS`,
  ROOM_PROFILE_ERROR: `${prefix}_ROOM_PROFILE_ERROR`,

  doClearErrorMessage() {
    return {
      type: actions.ERROR_MESSAGE_CLEARED,
    };
  },

  doOpenRoom: () => async (dispatch) => {
    try {
      dispatch({ type: actions.ROOM_PROFILE_START });
      let room = await service.getRoom();
      
      if (room) {
        dispatch({
          type: actions.ROOM_PROFILE_SUCCESS,
          payload: {
            room,
          },
        });

        getHistory().push({
          pathname: '/live',
        });
      } else {
        dispatch({ type: actions.ROOM_PROFILE_ERROR });
        Message.error(i18n('room.openRoom.error'));
      }
    } catch (error) {
      Errors.handle(error);
      dispatch({ type: actions.ROOM_PROFILE_ERROR });
    }
  },
};

export default actions;
