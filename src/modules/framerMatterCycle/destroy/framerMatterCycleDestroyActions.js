import destroyActions from 'modules/shared/destroy/destroyActions';
import listActions from 'modules/framerMatterCycle/list/framerMatterCycleListActions';
import FramerMatterCycleService from 'modules/framerMatterCycle/framerMatterCycleService';

const prefix = 'FramerMatterCycle_DESTROY';

export default destroyActions({
  prefix,
  destroyAllFn: FramerMatterCycleService.destroyAll,
  destroySuccessMessageI18nKey:
    'entities.FramerMatterCycle.destroy.success',
  destroyAllSuccessMessageI18nKey:
    'entities.FramerMatterCycle.destroyAll.success',
  redirectTo: '/framerMatterCycle',
  listActions,
});
