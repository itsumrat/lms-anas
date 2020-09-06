import destroyActions from "modules/shared/destroy/destroyActions";
import listActions from "modules/timeTableTeacher/list/timeTableTeacherListActions";
import TimeTableTeacherService from "modules/timeTableTeacher/timeTableTeacherService";

const prefix = "TimeTableTeacher_DESTROY";

export default destroyActions({
  prefix,
  destroyAllFn: TimeTableTeacherService.destroyAll,
  destroySuccessMessageI18nKey: "entities.TimeTableTeacher.destroy.success",
  destroyAllSuccessMessageI18nKey:
    "entities.TimeTableTeacher.destroyAll.success",
  redirectTo: "/timeTableTeacher",
  listActions,
});
