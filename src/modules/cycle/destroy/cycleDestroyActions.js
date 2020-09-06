import destroyActions from 'modules/shared/destroy/destroyActions';
import listActions from 'modules/cycle/list/cycleListActions';
import CycleService from 'modules/cycle/cycleService';

const prefix = 'Cycle_DESTROY';

export default destroyActions({
  prefix,
  destroyAllFn: CycleService.destroyAll,
  destroySuccessMessageI18nKey:
    'entities.Cycle.destroy.success',
  destroyAllSuccessMessageI18nKey:
    'entities.Cycle.destroyAll.success',
  redirectTo: '/cycle',
  listActions,
});
