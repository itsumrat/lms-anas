import viewActions from 'modules/shared/view/viewActions';
import LevelSectorService from 'modules/levelSector/levelSectorService';

const prefix = 'LevelSector_VIEW';

export default viewActions({
    prefix,
    findFn: LevelSectorService.find,
    redirectToOnError: '/levelSector',
});