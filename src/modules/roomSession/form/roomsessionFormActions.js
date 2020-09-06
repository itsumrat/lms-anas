import RoomsessionService from 'modules/roomSession/roomSessionService';
import formActions from 'modules/shared/form/formActions';

const prefix = 'Roomsession_FORM';

export default formActions({
  prefix,
  createFn: RoomsessionService.create,
  createSuccessMessageI18nKey:
    'entities.Roomsession.create.success',
  updateFn: RoomsessionService.update,
  updateSuccessMessageI18nKey:
    'entities.Roomsession.update.success',
  findFn: RoomsessionService.find,
  redirectTo: '/roomsession',
});
