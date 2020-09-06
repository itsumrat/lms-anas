import viewActions from 'modules/shared/view/viewActions';
import CycleService from 'modules/cycle/cycleService';

const prefix = 'Cycle_VIEW';

export default viewActions({
    prefix,
    findFn: CycleService.find,
    redirectToOnError: '/cycle',
});