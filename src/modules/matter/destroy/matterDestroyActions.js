import destroyActions from 'modules/shared/destroy/destroyActions';
import listActions from 'modules/matter/list/matterListActions';
import MatterService from 'modules/matter/matterService';

const prefix = 'MATTER_DESTROY';

export default destroyActions({
  prefix,
  destroyAllFn: MatterService.destroyAll,
  destroySuccessMessageI18nKey:
    'entities.Matter.destroy.success',
  destroyAllSuccessMessageI18nKey:
    'entities.Matter.destroyAll.success',
  redirectTo: '/Matter',
  listActions,
});
