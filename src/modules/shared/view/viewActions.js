import Errors from 'modules/shared/error/errors';
import { getHistory } from 'modules/store';
import Message from 'view/shared/message';
import { i18n } from 'i18n';

export default ({
  prefix,
  findFn,
  findLikesAd,
  isMutual,
  redirectToOnError,
  publishFn,
  closingFn,
  duplicateFn,
  archiveFn,
  draftFn,
}) => {
  const actions = {
    FIND_STARTED: `${prefix}_FIND_STARTED`,
    FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
    FIND_ERROR: `${prefix}_FIND_ERROR`,
    ISMUTUAL_STARTED: `${prefix}_ISMUTUAL_STARTED`,
    ISMUTUAL_SUCCESS: `${prefix}_ISMUTUAL_SUCCESS`,
    ISMUTUAL_ERROR: `${prefix}_ISMUTUAL_ERROR`,

    doFind: (id) => async (dispatch) => {
      try {
        dispatch({
          type: actions.FIND_STARTED,
        });

        var record = await findFn(id);
        if (prefix == 'BOOKING_VIEW') {
          const likes = await findLikesAd(id);

          record = { ...record, ...likes };
        }

        dispatch({
          type: actions.FIND_SUCCESS,
          payload: record,
        });
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: actions.FIND_ERROR,
        });

        getHistory().push(redirectToOnError);
      }
    },

    isMutual: (id, flag, idAd) => async (dispatch) => {
      try {
        dispatch({
          type: actions.FIND_STARTED,
        });

        const record = await isMutual(id, flag);
        dispatch({
          type: actions.FIND_SUCCESS,
        });
        getHistory().push(`${redirectToOnError}/${idAd}`);
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: actions.FIND_ERROR,
        });

        getHistory().push(redirectToOnError);
      }
    },
    StatusAd: (data, code) => async (
      dispatch,
      getState,
    ) => {
      var ad = data;
      try {
        dispatch({
          type: actions.FIND_STARTED,
        });
        switch (code) {
          case 'PUB':
            await publishFn(ad.id);
            break;
          case 'CLO':
            await closingFn(ad.id);
            break;
          case 'ARC':
            await archiveFn(ad.id);
            break;
          case 'DUP':
            await duplicateFn(ad);
            break;
          case 'DRA':
            await draftFn(ad.id);
            break;
        }

        dispatch({
          type: actions.FIND_SUCCESS,
        });

        Message.success(i18n(`entities.ad.status.${code}`));
        getHistory().push(
          `${redirectToOnError}/${data.id}`,
        );
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: actions.FIND_ERROR,
        });
      }
    },
  };

  return actions;
};
