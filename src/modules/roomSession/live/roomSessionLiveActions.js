import service from 'modules/roomSession/roomSessionService';
import Errors from 'modules/shared/error/errors';
import Message from 'view/shared/message';
import { i18n } from 'i18n';
import { getHistory } from 'modules/store';
import { getStore } from 'modules/store';
import { getLanguageCode } from 'i18n';

const prefix = 'ROOM';

const actions = {
  ERROR_MESSAGE_CLEARED: `${prefix}_ERROR_MESSAGE_CLEARED`,

  ROOM__START: `${prefix}_ROOM_START`,
  ROOM_SUCCESS: `${prefix}_ROOM_SUCCESS`,
  ROOM_ERROR: `${prefix}_ROOM_ERROR`,

  doClearErrorMessage() {
    return {
      type: actions.ERROR_MESSAGE_CLEARED,
    };
  },

  doOpenRoom: () => async (dispatch) => {
    try {
      dispatch({ type: actions.ROOM__START });
      let room = await service.getRoom();
      if (room) {
        dispatch({
          type: actions.ROOM_SUCCESS,
          payload: {
            room,
          },
        });
        Message.error(
          i18n('roomSession.live.openRoom.success'),
        );
      } else {
        dispatch({ type: actions.ROOM_ERROR });
        Message.error(
          i18n('roomSession.live.openRoom.error'),
        );

        getHistory().push('/');
      }
    } catch (error) {
      Errors.handle(error);
      dispatch({ type: actions.ROOM_ERROR });
      getHistory().push('/');
    }
  },
};

export default actions;
