import destroyActions from "modules/shared/destroy/destroyActions";
import listActions from "modules/schoolYear/list/schoolYearListActions";
import SchoolYearService from "modules/schoolYear/schoolYearService";

const prefix = "SchoolYear_DESTROY";

export default destroyActions({
  prefix,
  destroyAllFn: SchoolYearService.destroyAll,
  destroySuccessMessageI18nKey: "entities.SchoolYear.destroy.success",
  destroyAllSuccessMessageI18nKey: "entities.SchoolYear.destroyAll.success",
  redirectTo: "/schoolYear",
  listActions,
});
