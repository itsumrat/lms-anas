import viewActions from 'modules/shared/view/viewActions';
import ClassroomService from 'modules/classroom/classroomService';

const prefix = 'Classroom_VIEW';

export default viewActions({
    prefix,
    findFn: ClassroomService.find,
    redirectToOnError: '/classroom',
});