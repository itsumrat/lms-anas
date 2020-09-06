import destroyActions from 'modules/shared/destroy/destroyActions';
import listActions from 'modules/levelSector/list/levelSectorListActions';
import LevelSectorService from 'modules/levelSector/levelSectorService';

const prefix = 'LevelSector_DESTROY';

export default destroyActions({
  prefix,
  destroyAllFn: LevelSectorService.destroyAll,
  destroySuccessMessageI18nKey:
    'entities.LevelSector.destroy.success',
  destroyAllSuccessMessageI18nKey:
    'entities.LevelSector.destroyAll.success',
  redirectTo: '/levelSector',
  listActions,
});
