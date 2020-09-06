import destroyActions from 'modules/shared/destroy/destroyActions';
import listActions from 'modules/assignments/list/assignmentsListActions';
import AssignmentsService from 'modules/assignments/assignmentsService';

const prefix = 'Assignments_DESTROY';

export default destroyActions({
  prefix,
  destroyAllFn: AssignmentsService.destroyAll,
  destroySuccessMessageI18nKey:
    'entities.Assignments.destroy.success',
  destroyAllSuccessMessageI18nKey:
    'entities.Assignments.destroyAll.success',
  redirectTo: '/assignments',
  listActions,
});
