import TeachersService from 'modules/teachers/teachersService';
import formActions from 'modules/shared/form/formActions';

const prefix = 'Teachers_FORM';

export default formActions({
    prefix,
    createFn: TeachersService.create,
    createSuccessMessageI18nKey:
        'entities.Teachers.create.success',
    updateFn: TeachersService.update,
    updateSuccessMessageI18nKey:
        'entities.Teachers.update.success',
    findFn: TeachersService.find,
    redirectTo: '/teachers',
});