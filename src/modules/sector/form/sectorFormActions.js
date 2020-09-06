import SectorService from 'modules/sector/sectorService';
import formActions from 'modules/shared/form/formActions';

const prefix = 'Sector_FORM';

export default formActions({
    prefix,
    createFn: SectorService.create,
    createSuccessMessageI18nKey:
        'entities.Sector.create.success',
    updateFn: SectorService.update,
    updateSuccessMessageI18nKey:
        'entities.Sector.update.success',
    findFn: SectorService.find,
    redirectTo: '/sector',
});