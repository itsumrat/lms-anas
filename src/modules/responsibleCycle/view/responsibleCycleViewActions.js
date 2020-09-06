import viewActions from 'modules/shared/view/viewActions';
import ResponsibleCycleService from 'modules/responsibleCycle/responsibleCycleService';

const prefix = 'ResponsibleCycle_VIEW';

export default viewActions({
    prefix,
    findFn: ResponsibleCycleService.find,
    redirectToOnError: '/responsibleCycle',
});