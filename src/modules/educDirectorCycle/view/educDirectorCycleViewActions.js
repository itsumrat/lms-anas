import viewActions from 'modules/shared/view/viewActions';
import EducDirectorCycleService from 'modules/educDirectorCycle/educDirectorCycleService';

const prefix = 'EducDirectorCycle_VIEW';

export default viewActions({
    prefix,
    findFn: EducDirectorCycleService.find,
    redirectToOnError: '/educDirectorCycle',
});