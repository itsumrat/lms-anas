import CourseStudentsService from "modules/courseStudents/courseStudentsService";
import formActions from "modules/shared/form/formActions";

const prefix = "MATTER_FORM";

export default formActions({
  prefix,
  createFn: CourseStudentsService.create,
  createSuccessMessageI18nKey: "entities.CourseStudents.create.success",
  updateFn: CourseStudentsService.update,
  updateSuccessMessageI18nKey: "entities.CourseStudents.update.success",
  findFn: CourseStudentsService.find,
  redirectTo: "/CourseStudents",
});
