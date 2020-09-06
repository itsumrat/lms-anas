import destroyActions from 'modules/shared/destroy/destroyActions';
import listActions from 'modules/framer/list/framerListActions';
import FramerService from 'modules/framer/framerService';

const prefix = 'Framer_DESTROY';

export default destroyActions({
  prefix,
  destroyAllFn: FramerService.destroyAll,
  destroySuccessMessageI18nKey:
    'entities.Framer.destroy.success',
  destroyAllSuccessMessageI18nKey:
    'entities.Framer.destroyAll.success',
  redirectTo: '/framer',
  listActions,
});
