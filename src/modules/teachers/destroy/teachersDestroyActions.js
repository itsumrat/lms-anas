import destroyActions from 'modules/shared/destroy/destroyActions';
import listActions from 'modules/teachers/list/teachersListActions';
import TeachersService from 'modules/teachers/teachersService';

const prefix = 'Teachers_DESTROY';

export default destroyActions({
  prefix,
  destroyAllFn: TeachersService.destroyAll,
  destroySuccessMessageI18nKey:
    'entities.Teachers.destroy.success',
  destroyAllSuccessMessageI18nKey:
    'entities.Teachers.destroyAll.success',
  redirectTo: '/teachers',
  listActions,
});
