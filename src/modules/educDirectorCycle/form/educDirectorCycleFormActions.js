import EducDirectorCycleService from 'modules/educDirectorCycle/educDirectorCycleService';
import formActions from 'modules/shared/form/formActions';

const prefix = 'EducDirectorCycle_FORM';

export default formActions({
    prefix,
    createFn: EducDirectorCycleService.create,
    createSuccessMessageI18nKey:
        'entities.EducDirectorCycle.create.success',
    updateFn: EducDirectorCycleService.update,
    updateSuccessMessageI18nKey:
        'entities.EducDirectorCycle.update.success',
    findFn: EducDirectorCycleService.find,
    redirectTo: '/educDirectorCycle',
});