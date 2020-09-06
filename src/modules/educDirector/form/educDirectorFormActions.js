import EducDirectorService from 'modules/educDirector/educDirectorService';
import formActions from 'modules/shared/form/formActions';

const prefix = 'EducDirector_FORM';

export default formActions({
    prefix,
    createFn: EducDirectorService.create,
    createSuccessMessageI18nKey:
        'entities.EducDirector.create.success',
    updateFn: EducDirectorService.update,
    updateSuccessMessageI18nKey:
        'entities.EducDirector.update.success',
    findFn: EducDirectorService.find,
    redirectTo: '/educDirector',
});