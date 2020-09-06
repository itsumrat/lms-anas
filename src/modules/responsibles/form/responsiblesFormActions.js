import ResponsiblesService from 'modules/responsibles/responsiblesService';
import formActions from 'modules/shared/form/formActions';

const prefix = 'Responsibles_FORM';

export default formActions({
    prefix,
    createFn: ResponsiblesService.create,
    createSuccessMessageI18nKey:
        'entities.Responsibles.create.success',
    updateFn: ResponsiblesService.update,
    updateSuccessMessageI18nKey:
        'entities.Responsibles.update.success',
    findFn: ResponsiblesService.find,
    redirectTo: '/responsibles',
});