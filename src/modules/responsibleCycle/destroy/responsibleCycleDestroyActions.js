import destroyActions from 'modules/shared/destroy/destroyActions';
import listActions from 'modules/responsibleCycle/list/responsibleCycleListActions';
import ResponsibleCycleService from 'modules/responsibleCycle/responsibleCycleService';

const prefix = 'ResponsibleCycle_DESTROY';

export default destroyActions({
  prefix,
  destroyAllFn: ResponsibleCycleService.destroyAll,
  destroySuccessMessageI18nKey:
    'entities.ResponsibleCycle.destroy.success',
  destroyAllSuccessMessageI18nKey:
    'entities.ResponsibleCycle.destroyAll.success',
  redirectTo: '/responsibleCycle',
  listActions,
});
