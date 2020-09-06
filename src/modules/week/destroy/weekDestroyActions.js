import destroyActions from "modules/shared/destroy/destroyActions";
import listActions from "modules/week/list/weekListActions";
import WeekService from "modules/week/weekService";

const prefix = "Week_DESTROY";

export default destroyActions({
  prefix,
  destroyAllFn: WeekService.destroyAll,
  destroySuccessMessageI18nKey: "entities.Week.destroy.success",
  destroyAllSuccessMessageI18nKey: "entities.Week.destroyAll.success",
  redirectTo: "/week",
  listActions,
});
