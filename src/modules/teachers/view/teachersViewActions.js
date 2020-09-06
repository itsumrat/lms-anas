import viewActions from 'modules/shared/view/viewActions';
import TeachersService from 'modules/teachers/teachersService';

const prefix = 'Teachers_VIEW';

export default viewActions({
    prefix,
    findFn: TeachersService.find,
    redirectToOnError: '/teachers',
});