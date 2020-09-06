import destroyActions from 'modules/shared/destroy/destroyActions';
import listActions from 'modules/parent/list/parentListActions';
import ParentService from 'modules/parent/parentService';

const prefix = 'Parent_DESTROY';

export default destroyActions({
  prefix,
  destroyAllFn: ParentService.destroyAll,
  destroySuccessMessageI18nKey:
    'entities.Parent.destroy.success',
  destroyAllSuccessMessageI18nKey:
    'entities.Parent.destroyAll.success',
  redirectTo: '/parent',
  listActions,
});
