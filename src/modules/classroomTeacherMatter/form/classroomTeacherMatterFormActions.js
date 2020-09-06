import ClassroomTeacherMatterService from 'modules/classroomTeacherMatter/classroomTeacherMatterService';
import formActions from 'modules/shared/form/formActions';

const prefix = 'ClassroomTeacherMatter_FORM';

export default formActions({
    prefix,
    createFn: ClassroomTeacherMatterService.create,
    createSuccessMessageI18nKey:
        'entities.ClassroomTeacherMatter.create.success',
    updateFn: ClassroomTeacherMatterService.update,
    updateSuccessMessageI18nKey:
        'entities.ClassroomTeacherMatter.update.success',
    findFn: ClassroomTeacherMatterService.find,
    redirectTo: '/classroomTeacherMatter',
});