import viewActions from 'modules/shared/view/viewActions';
import SectorService from 'modules/sector/sectorService';

const prefix = 'Sector_VIEW';

export default viewActions({
    prefix,
    findFn: SectorService.find,
    redirectToOnError: '/sector',
});