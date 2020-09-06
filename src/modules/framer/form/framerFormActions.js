import FramerService from 'modules/framer/framerService';
import formActions from 'modules/shared/form/formActions';

const prefix = 'Framer_FORM';

export default formActions({
    prefix,
    createFn: FramerService.create,
    createSuccessMessageI18nKey:
        'entities.Framer.create.success',
    updateFn: FramerService.update,
    updateSuccessMessageI18nKey:
        'entities.Framer.update.success',
    findFn: FramerService.find,
    redirectTo: '/framer',
});