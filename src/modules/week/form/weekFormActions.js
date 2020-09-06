import WeekService from "modules/week/weekService";
import formActions from "modules/shared/form/formActions";

const prefix = "Week_FORM";

export default formActions({
  prefix,
  createFn: WeekService.create,
  createSuccessMessageI18nKey: "entities.Week.create.success",
  updateFn: WeekService.update,
  updateSuccessMessageI18nKey: "entities.Week.update.success",
  findFn: WeekService.find,
  redirectTo: "/week",
});
