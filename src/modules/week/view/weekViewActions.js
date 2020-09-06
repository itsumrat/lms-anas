import viewActions from "modules/shared/view/viewActions";
import WeekService from "modules/week/weekService";

const prefix = "Week_VIEW";

export default viewActions({
  prefix,
  findFn: WeekService.find,
  redirectToOnError: "/week",
});
