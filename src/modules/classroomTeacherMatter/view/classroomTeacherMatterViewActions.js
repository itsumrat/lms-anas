import viewActions from 'modules/shared/view/viewActions';
import ClassroomTeacherMatterService from 'modules/classroomTeacherMatter/classroomTeacherMatterService';

const prefix = 'ClassroomTeacherMatter_VIEW';

export default viewActions({
    prefix,
    findFn: ClassroomTeacherMatterService.find,
    redirectToOnError: '/classroomTeacherMatter',
});