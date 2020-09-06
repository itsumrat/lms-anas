import viewActions from "modules/shared/view/viewActions";
import SchoolYearService from "modules/schoolYear/schoolYearService";

const prefix = "SchoolYear_VIEW";

export default viewActions({
  prefix,
  findFn: SchoolYearService.find,
  redirectToOnError: "/schoolYear",
});
