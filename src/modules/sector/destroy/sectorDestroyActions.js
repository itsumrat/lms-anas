import destroyActions from 'modules/shared/destroy/destroyActions';
import listActions from 'modules/sector/list/sectorListActions';
import SectorService from 'modules/sector/sectorService';

const prefix = 'Sector_DESTROY';

export default destroyActions({
  prefix,
  destroyAllFn: SectorService.destroyAll,
  destroySuccessMessageI18nKey:
    'entities.Sector.destroy.success',
  destroyAllSuccessMessageI18nKey:
    'entities.Sector.destroyAll.success',
  redirectTo: '/sector',
  listActions,
});
