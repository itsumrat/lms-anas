import TimeTableTeacherService from "modules/timeTableTeacher/timeTableTeacherService";
import paginationAction from "modules/shared/pagination/paginationAction";
import selectors from "modules/timeTableTeacher/list/timeTableTeacherListSelectors";
import { i18n } from "i18n";
import exporterFields from "modules/timeTableTeacher/list/timeTableTeacherListExporterFields";

const prefix = "TimeTableTeacher_LIST";

export default paginationAction(
  prefix,
  TimeTableTeacherService.list,
  selectors,
  i18n("entities.TimeTableTeacher.exporterFileName"),
  exporterFields
);
