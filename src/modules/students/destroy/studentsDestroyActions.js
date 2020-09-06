import destroyActions from 'modules/shared/destroy/destroyActions';
import listActions from 'modules/students/list/studentsListActions';
import StudentsService from 'modules/students/studentsService';

const prefix = 'Students_DESTROY';

export default destroyActions({
  prefix,
  destroyAllFn: StudentsService.destroyAll,
  destroySuccessMessageI18nKey:
    'entities.Students.destroy.success',
  destroyAllSuccessMessageI18nKey:
    'entities.Students.destroyAll.success',
  redirectTo: '/students',
  listActions,
});
