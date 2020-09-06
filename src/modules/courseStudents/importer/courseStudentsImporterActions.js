import importerActions from "modules/shared/importer/importerActions";
import selectors from "modules/courseStudents/importer/courseStudentsImporterSelectors";
import CourseStudentsService from "modules/courseStudents/courseStudentsService";
import fields from "modules/courseStudents/importer/courseStudentsImporterFields";
import { i18n } from "i18n";

export default importerActions(
  "CourseStudents_IMPORTER",
  selectors,
  CourseStudentsService.import,
  fields,
  i18n("entities.CourseStudents.importer.fileName")
);
