import LevelService from 'modules/level/levelService';
import formActions from 'modules/shared/form/formActions';

const prefix = 'Level_FORM';

export default formActions({
    prefix,
    createFn: LevelService.create,
    createSuccessMessageI18nKey:
        'entities.Level.create.success',
    updateFn: LevelService.update,
    updateSuccessMessageI18nKey:
        'entities.Level.update.success',
    findFn: LevelService.find,
    redirectTo: '/level',
});