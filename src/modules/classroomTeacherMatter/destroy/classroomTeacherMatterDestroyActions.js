import destroyActions from 'modules/shared/destroy/destroyActions';
import listActions from 'modules/classroomTeacherMatter/list/classroomTeacherMatterListActions';
import ClassroomTeacherMatterService from 'modules/classroomTeacherMatter/classroomTeacherMatterService';

const prefix = 'ClassroomTeacherMatter_DESTROY';

export default destroyActions({
  prefix,
  destroyAllFn: ClassroomTeacherMatterService.destroyAll,
  destroySuccessMessageI18nKey:
    'entities.ClassroomTeacherMatter.destroy.success',
  destroyAllSuccessMessageI18nKey:
    'entities.ClassroomTeacherMatter.destroyAll.success',
  redirectTo: '/classroomTeacherMatter',
  listActions,
});
