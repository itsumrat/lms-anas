import destroyActions from 'modules/shared/destroy/destroyActions';
import listActions from 'modules/level/list/levelListActions';
import LevelService from 'modules/level/levelService';

const prefix = 'Level_DESTROY';

export default destroyActions({
  prefix,
  destroyAllFn: LevelService.destroyAll,
  destroySuccessMessageI18nKey:
    'entities.Level.destroy.success',
  destroyAllSuccessMessageI18nKey:
    'entities.Level.destroyAll.success',
  redirectTo: '/level',
  listActions,
});
