import SchoolYearService from "modules/schoolYear/schoolYearService";
import formActions from "modules/shared/form/formActions";

const prefix = "SchoolYear_FORM";

export default formActions({
  prefix,
  createFn: SchoolYearService.create,
  createSuccessMessageI18nKey: "entities.SchoolYear.create.success",
  updateFn: SchoolYearService.update,
  updateSuccessMessageI18nKey: "entities.SchoolYear.update.success",
  findFn: SchoolYearService.find,
  redirectTo: "/schoolYear",
});
