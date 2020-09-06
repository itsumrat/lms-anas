import viewActions from "modules/shared/view/viewActions";
import ElementService from "modules/element/elementService";

const prefix = "Element_VIEW";

export default viewActions({
  prefix,
  findFn: ElementService.find,
  redirectToOnError: "/element",
});
