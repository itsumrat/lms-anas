import FramerMatterCycleService from 'modules/framerMatterCycle/framerMatterCycleService';
import formActions from 'modules/shared/form/formActions';

const prefix = 'framerMatterCycle_FORM';

export default formActions({
    prefix,
    createFn: FramerMatterCycleService.create,
    createSuccessMessageI18nKey:
        'entities.FramerMatterCycle.create.success',
    updateFn: FramerMatterCycleService.update,
    updateSuccessMessageI18nKey:
        'entities.FramerMatterCycle.update.success',
    findFn: FramerMatterCycleService.find,
    redirectTo: '/framerMatterCycle',
});