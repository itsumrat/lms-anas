import ParentService from 'modules/parent/parentService';
import formActions from 'modules/shared/form/formActions';

const prefix = 'Parent_FORM';

export default formActions({
    prefix,
    createFn: ParentService.create,
    createSuccessMessageI18nKey:
        'entities.Parent.create.success',
    updateFn: ParentService.update,
    updateSuccessMessageI18nKey:
        'entities.Parent.update.success',
    findFn: ParentService.find,
    redirectTo: '/parent',
});