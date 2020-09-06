import LevelSectorService from 'modules/levelSector/levelSectorService';
import formActions from 'modules/shared/form/formActions';

const prefix = 'LevelSector_FORM';

export default formActions({
    prefix,
    createFn: LevelSectorService.create,
    createSuccessMessageI18nKey:
        'entities.LevelSector.create.success',
    updateFn: LevelSectorService.update,
    updateSuccessMessageI18nKey:
        'entities.LevelSector.update.success',
    findFn: LevelSectorService.find,
    redirectTo: '/levelSector',
});