import destroyActions from 'modules/shared/destroy/destroyActions';
import listActions from 'modules/responsibles/list/responsiblesListActions';
import ResponsiblesService from 'modules/responsibles/responsiblesService';

const prefix = 'Responsibles_DESTROY';

export default destroyActions({
  prefix,
  destroyAllFn: ResponsiblesService.destroyAll,
  destroySuccessMessageI18nKey:
    'entities.Responsibles.destroy.success',
  destroyAllSuccessMessageI18nKey:
    'entities.Responsibles.destroyAll.success',
  redirectTo: '/responsibles',
  listActions,
});
