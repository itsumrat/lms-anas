import destroyActions from 'modules/shared/destroy/destroyActions';
import listActions from 'modules/classroom/list/classroomListActions';
import ClassroomService from 'modules/classroom/classroomService';

const prefix = 'Classroom_DESTROY';

export default destroyActions({
  prefix,
  destroyAllFn: ClassroomService.destroyAll,
  destroySuccessMessageI18nKey:
    'entities.Classroom.destroy.success',
  destroyAllSuccessMessageI18nKey:
    'entities.Classroom.destroyAll.success',
  redirectTo: '/classroom',
  listActions,
});
