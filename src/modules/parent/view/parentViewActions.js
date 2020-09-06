import viewActions from 'modules/shared/view/viewActions';
import ParentService from 'modules/parent/parentService';

const prefix = 'Parent_VIEW';

export default viewActions({
    prefix,
    findFn: ParentService.find,
    redirectToOnError: '/parent',
});