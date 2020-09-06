import viewActions from 'modules/shared/view/viewActions';
import AssignmentsService from 'modules/assignments/assignmentsService';

const prefix = 'Assignments_VIEW';

export default viewActions({
    prefix,
    findFn: AssignmentsService.find,
    redirectToOnError: '/assignments',
});