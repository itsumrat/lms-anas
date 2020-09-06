import destroyActions from 'modules/shared/destroy/destroyActions';
import listActions from 'modules/educDirectorCycle/list/educDirectorCycleListActions';
import EducDirectorCycleService from 'modules/educDirectorCycle/educDirectorCycleService';

const prefix = 'EducDirectorCycle_DESTROY';

export default destroyActions({
  prefix,
  destroyAllFn: EducDirectorCycleService.destroyAll,
  destroySuccessMessageI18nKey:
    'entities.EducDirectorCycle.destroy.success',
  destroyAllSuccessMessageI18nKey:
    'entities.EducDirectorCycle.destroyAll.success',
  redirectTo: '/educDirectorCycle',
  listActions,
});
