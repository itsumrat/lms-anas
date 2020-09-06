import viewActions from 'modules/shared/view/viewActions';
import LevelService from 'modules/level/levelService';

const prefix = 'Level_VIEW';

export default viewActions({
    prefix,
    findFn: LevelService.find,
    redirectToOnError: '/level',
});