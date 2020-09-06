import destroyActions from 'modules/shared/destroy/destroyActions';
import listActions from 'modules/roomSession/list/roomsessionListActions';
import RoomsessionService from 'modules/roomSession/roomSessionService';

const prefix = 'Roomsession_DESTROY';

export default destroyActions({
  prefix,
  destroyAllFn: RoomsessionService.destroyAll,
  destroySuccessMessageI18nKey:
    'entities.Roomsession.destroy.success',
  destroyAllSuccessMessageI18nKey:
    'entities.Roomsession.destroyAll.success',
  redirectTo: '/roomsession',
  listActions,
});
