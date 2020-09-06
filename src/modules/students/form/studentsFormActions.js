import StudentsService from 'modules/students/studentsService';
import formActions from 'modules/shared/form/formActions';

const prefix = 'Students_FORM';

export default formActions({
    prefix,
    createFn: StudentsService.create,
    createSuccessMessageI18nKey:
        'entities.Students.create.success',
    updateFn: StudentsService.update,
    updateSuccessMessageI18nKey:
        'entities.Students.update.success',
    findFn: StudentsService.find,
    redirectTo: '/students',
});