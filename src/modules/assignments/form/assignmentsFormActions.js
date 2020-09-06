import AssignmentsService from 'modules/assignments/assignmentsService';
import formActions from 'modules/shared/form/formActions';

const prefix = 'Assignments_FORM';

export default formActions({
    prefix,
    createFn: AssignmentsService.create,
    createSuccessMessageI18nKey:
        'entities.Assignments.create.success',
    updateFn: AssignmentsService.update,
    updateSuccessMessageI18nKey:
        'entities.Assignments.update.success',
    findFn: AssignmentsService.find,
    redirectTo: '/assignments',
});