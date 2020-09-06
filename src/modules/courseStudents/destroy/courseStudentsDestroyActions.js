import destroyActions from "modules/shared/destroy/destroyActions";
import listActions from "modules/courseStudents/list/courseStudentsListActions";
import CourseStudentsService from "modules/courseStudents/courseStudentsService";

const prefix = "MATTER_DESTROY";

export default destroyActions({
  prefix,
  destroyAllFn: CourseStudentsService.destroyAll,
  destroySuccessMessageI18nKey: "entities.CourseStudents.destroy.success",
  destroyAllSuccessMessageI18nKey: "entities.CourseStudents.destroyAll.success",
  redirectTo: "/CourseStudents",
  listActions,
});
