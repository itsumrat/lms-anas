import viewActions from 'modules/shared/view/viewActions';
import StudentsService from 'modules/students/studentsService';

const prefix = 'Students_VIEW';

export default viewActions({
    prefix,
    findFn: StudentsService.find,
    redirectToOnError: '/students',
});