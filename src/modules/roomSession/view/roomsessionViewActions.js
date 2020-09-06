import viewActions from 'modules/shared/view/viewActions';
import RoomsessionService from 'modules/roomSession/roomSessionService';

const prefix = 'Roomsession_VIEW';

export default viewActions({
  prefix,
  findFn: RoomsessionService.find,
  redirectToOnError: '/roomsession',
});
