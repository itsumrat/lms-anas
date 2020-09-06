import ClassroomService from 'modules/classroom/classroomService';
import formActions from 'modules/shared/form/formActions';

const prefix = 'Classroom_FORM';

export default formActions({
    prefix,
    createFn: ClassroomService.create,
    createSuccessMessageI18nKey:
        'entities.Classroom.create.success',
    updateFn: ClassroomService.update,
    updateSuccessMessageI18nKey:
        'entities.Classroom.update.success',
    findFn: ClassroomService.find,
    redirectTo: '/classroom',
});