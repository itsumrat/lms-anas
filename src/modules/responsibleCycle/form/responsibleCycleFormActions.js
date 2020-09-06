import ResponsibleCycleService from 'modules/responsibleCycle/responsibleCycleService';
import formActions from 'modules/shared/form/formActions';

const prefix = 'ResponsibleCycle_FORM';

export default formActions({
    prefix,
    createFn: ResponsibleCycleService.create,
    createSuccessMessageI18nKey:
        'entities.ResponsibleCycle.create.success',
    updateFn: ResponsibleCycleService.update,
    updateSuccessMessageI18nKey:
        'entities.ResponsibleCycle.update.success',
    findFn: ResponsibleCycleService.find,
    redirectTo: '/responsibleCycle',
});