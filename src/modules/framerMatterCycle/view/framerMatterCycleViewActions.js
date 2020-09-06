import viewActions from 'modules/shared/view/viewActions';
import FramerMatterCycleService from 'modules/framerMatterCycle/framerMatterCycleService';

const prefix = 'FramerMatterCycle_VIEW';

export default viewActions({
    prefix,
    findFn: FramerMatterCycleService.find,
    redirectToOnError: '/framerMatterCycle',
});