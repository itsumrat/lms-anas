import viewActions from "modules/shared/view/viewActions";
import CourseStudentsService from "modules/courseStudents/courseStudentsService";

const prefix = "MATTER_VIEW";

export default viewActions({
  prefix,
  findFn: CourseStudentsService.find,
  redirectToOnError: "/CourseStudents",
});
