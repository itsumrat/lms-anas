import CycleService from 'modules/cycle/cycleService';
import formActions from 'modules/shared/form/formActions';

const prefix = 'Cycle_FORM';

export default formActions({
    prefix,
    createFn: CycleService.create,
    createSuccessMessageI18nKey:
        'entities.Cycle.create.success',
    updateFn: CycleService.update,
    updateSuccessMessageI18nKey:
        'entities.Cycle.update.success',
    findFn: CycleService.find,
    redirectTo: '/cycle',
});